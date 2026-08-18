import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random database column type.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * type(fakerCore) // 'timestamp'
 *
 * @since 4.0.0
 */
export function type(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.database.type);
}
