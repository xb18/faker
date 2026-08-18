import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { NumberOrRange } from '../../utils/types';
import { commonFileExt } from './common-file-ext';
import { fileName as systemFileName } from './file-name';

/**
 * Returns a random file name with a given extension or a commonly used extension.
 *
 * @param fakerCore The FakerCore to use.
 * @param extension The file extension to use. Empty string is considered to be not set.
 *
 * @example
 * commonFileName(fakerCore) // 'dollar.jpg'
 * commonFileName(fakerCore, 'txt') // 'global_borders_wyoming.txt'
 *
 * @since 3.1.0
 */
export function commonFileName(
  fakerCore: FakerCore,
  extension?: string
): string {
  const fileName = systemFileName(fakerCore, { extensionCount: 0 });

  return `${fileName}.${extension || commonFileExt(fakerCore)}`;
}
