import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random food's ethnic category.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * ethnicCategory(fakerCore) // 'Italian'
 *
 * @since 9.0.0
 */
export function ethnicCategory(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.food.ethnic_category);
}
