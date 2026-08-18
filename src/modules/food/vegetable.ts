import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random vegetable name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * vegetable(fakerCore) // 'broccoli'
 *
 * @since 9.0.0
 */
export function vegetable(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.food.vegetable);
}
