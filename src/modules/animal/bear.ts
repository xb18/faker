import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random bear species.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * bear(fakerCore) // 'Asian black bear'
 *
 * @since 5.5.0
 */
export function bear(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.animal.bear);
}
