import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random cow species.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * cow(fakerCore) // 'Brava'
 *
 * @since 5.5.0
 */
export function cow(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.animal.cow);
}
