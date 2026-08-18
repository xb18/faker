import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { NumberOrRange } from '../../utils/types';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a commonly used file type.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * commonFileType(fakerCore) // 'audio'
 *
 * @since 3.1.0
 */
export function commonFileType(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, commonFileTypes);
}
