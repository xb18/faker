import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { NumberOrRange } from '../../utils/types';
import { arrayElement } from '../helpers/array-element';
import { fileExt } from './file-ext';

/**
 * Returns a commonly used file extension.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * commonFileExt(fakerCore) // 'gif'
 *
 * @since 3.1.0
 */
export function commonFileExt(fakerCore: FakerCore): string {
  return fileExt(fakerCore, arrayElement(fakerCore, commonMimeTypes));
}
