import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random fish species.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * fish(fakerCore) // 'Mandarin fish'
 *
 * @since 5.5.0
 */
export function fish(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.animal.fish);
}
