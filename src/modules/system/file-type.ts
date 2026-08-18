import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { NumberOrRange } from '../../utils/types';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a file type.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * fileType(fakerCore) // 'message'
 *
 * @since 3.1.0
 */
export function fileType(fakerCore: FakerCore): string {
  const mimeTypes = fakerCore.locale.system.mime_type;

  const typeSet = new Set(
    Object.keys(mimeTypes).map((key) => key.split('/', 1)[0])
  );
  return arrayElement(fakerCore, [...typeSet]);
}
