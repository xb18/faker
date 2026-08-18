import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random animal type.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * type(fakerCore) // 'crocodile'
 *
 * @since 5.5.0
 */
export function type(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.animal.type);
}
