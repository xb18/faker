import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { SyntaxKind } from 'ts-morph';
import { getDeprecated, getJsDocs } from './apidocs/processing/jsdocs';
import { getProject } from './apidocs/project';
import { toCamelCase, toKebabCase } from './shared/character-case';
import { formatTypescript } from './shared/format';
import { FILE_PATH_SRC } from './shared/paths';

const project = getProject();

const directories = project
  .getDirectoryOrThrow('src')
  .getDirectoryOrThrow('modules')
  .getDirectories();

const moduleNames = new Set(directories.map((dir) => dir.getBaseName()));

//#region Module
for (const directory of directories) {
  const moduleName = directory.getBaseName();

  console.log(`Processing module: ${moduleName}`);
  //#region Module
  const moduleFile = directory.getSourceFileOrThrow('module.ts');

  const header = moduleFile
    .getStatements()[0]
    ?.getLeadingCommentRanges()
    .map((c) => c.getText());

  const imports = new Set([
    `import { SimpleModuleBase } from '../../internal/module-base';`,
    `import { ModuleBase } from '../../internal/module-base';`,
    `import type { Faker } from '../../faker';`,
    `import type { Casing, NumberRange } from '../../utils/types';`,
    `import type { LiteralUnion } from '../../internal/types';`,
    `import type { Distributor } from '../../distributors/distributor';`,
  ]);
  if (moduleName === 'image') {
    imports.add(`import type { SexType } from '../person';`);
  }

  const exports: string[] = moduleFile
    .getExportDeclarations()
    .map((exp) => exp.getText());

  const typesFile = directory.getSourceFile('_types.ts');
  if (typesFile) {
    const typesToImport = [
      typesFile.getEnums(),
      typesFile.getTypeAliases(),
      typesFile.getInterfaces(),
    ]
      .flat()
      .filter((decl) => decl.isExported())
      .map((decl) => decl.getName());

    if (typesToImport.length > 0) {
      imports.add(
        `import type { ${typesToImport.join(', ')} } from './_types';`
      );
    }
  }

  const content: string[] = [];
  const classes = moduleFile?.getClasses() ?? [];

  //#region Module Classes
  for (const cls of classes) {
    content.push(getJsDocs(cls).getText());
    const methodNames = cls.getMethods().map((method) => method.getName());
    for (const method of cls.getMethods()) {
      if (method.getName() !== 'fake') {
        method.remove();
      }
    }

    for (const methodName of methodNames) {
      if (methodName === 'fake') {
        continue;
      }

      const methodFile = directory.getSourceFileOrThrow(
        `${toKebabCase(methodName)}.ts`
      );

      const typesToImport = [
        methodFile.getEnums(),
        methodFile.getTypeAliases(),
        methodFile.getInterfaces(),
      ]
        .flat()
        .filter((decl) => decl.isExported())
        .map((decl) => decl.getName());

      imports.add(
        `import { ${methodName} as ${toCamelCase(moduleName, methodName)} } from './${toKebabCase(methodName)}';`
      );
      if (typesToImport.length > 0) {
        imports.add(
          `import type { ${typesToImport.join(', ')} } from './${toKebabCase(methodName)}';`
        );
      }

      const functions = methodFile
        .getChildrenOfKind(SyntaxKind.FunctionDeclaration)
        .filter((fn) => fn.isExported())
        .filter((fn) => fn.getName() === methodName);

      const parts: string[] = [];

      const restoreFakerTreeInvocations = (
        _: string,
        module: string,
        method: string
      ): string =>
        methodNames.includes(`${module}${method}`)
          ? `faker.${moduleName}.${module}${method}(`
          : moduleNames.has(module)
            ? `faker.${module}.${toCamelCase(method)}(`
            : `faker.${module}${method}(`;

      for (const child of functions) {
        //#region Module Functions
        const jsDocs = child.getJsDocs()[0];

        if (child.hasBody()) {
          const params = child
            .getSignature()
            .getParameters()
            .slice(1)
            .map((param) => param.getName());

          const isDeprecated = jsDocs && getDeprecated(jsDocs);

          child.setBodyText(
            `${
              isDeprecated
                ? '// eslint-disable-next-line @typescript-eslint/no-deprecated -- Internal call\n'
                : ''
            }return ${toCamelCase(moduleName, methodName)}(this.faker.fakerCore, ${params.join(', ')});`
          );
        }

        if (jsDocs) {
          const description = jsDocs
            .getFullText()
            // Param
            .replace(' * @param fakerCore The FakerCore to use.\n', '')
            .replaceAll(/ +\*\n +\*\n/g, ' *\n')
            // Examples
            .replaceAll(
              new RegExp(`${methodName}\\(fakerCore(?:, ?)?`, 'g'),
              `faker.${moduleName}.${methodName}(`
            )
            // Default Ref Date
            .replaceAll(
              /(?<= +\* .*?)\bgetDefaultRefDate\(fakerCore(?:, ?)?/g,
              'faker.defaultRefDate('
            )
            // Method References
            .replaceAll(
              /\b([a-z]+)([A-Z][a-zA-Z]+)\(fakerCore(?:, ?)?/g,
              restoreFakerTreeInvocations
            )
            .replaceAll(
              /\b([a-zA-Z]+)\(fakerCore(?:, ?)?/g,
              (_, method: string) =>
                `faker.${moduleName}.${toCamelCase(method)}(`
            );

          parts.push(description);
        }

        const signature = child
          .getSignature()
          .getDeclaration()
          .getText()
          // Adapt signature
          .replace('export function ', '')
          .replace(/\((\n +)?fakerCore: FakerCore,?/, '(')
          // Adapt nested options defaults
          .replaceAll(
            /(?<= +\* .*?)\bgetDefaultRefDate\(fakerCore(?:, ?)?/g,
            'faker.defaultRefDate('
          )
          .replaceAll(
            /(?<= +\* .*?)\b([a-z]+)([A-Z][a-zA-Z]+)\(fakerCore(?:, ?)?/g,
            restoreFakerTreeInvocations
          );

        parts.push(signature);
        //#endregion
      }

      cls.addMember(parts.join('\n'));
    }
    //#endregion

    content.push(cls.getText(), '');
  }

  content.unshift(...header, ...imports, '', ...exports, '');

  writeFileSync(
    resolve(FILE_PATH_SRC, 'modules', moduleName, 'module.ts'),
    await formatTypescript(content.join('\n')),
    'utf8'
  );
  //#endregion
}
//#endregion
