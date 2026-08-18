import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random ingredient name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * ingredient(fakerCore) // 'butter'
 *
 * @since 9.0.0
 */
export function ingredient(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.food.ingredient);
}
