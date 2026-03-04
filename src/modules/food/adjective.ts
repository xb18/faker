import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random dish adjective.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * adjective(fakerCore) // 'crispy'
 *
 * @since 9.0.0
 */
export function adjective(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.food.adjective);
}
