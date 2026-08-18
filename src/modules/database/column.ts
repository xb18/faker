import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random database column name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * column(fakerCore) // 'createdAt'
 *
 * @since 4.0.0
 */
export function column(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.database.column);
}
