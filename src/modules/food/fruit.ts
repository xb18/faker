import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random fruit name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * fruit(fakerCore) // 'lemon'
 *
 * @since 9.0.0
 */
export function fruit(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.food.fruit);
}
