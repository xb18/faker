import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random cat breed.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * cat(fakerCore) // 'Singapura'
 *
 * @since 5.5.0
 */
export function cat(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.animal.cat);
}
