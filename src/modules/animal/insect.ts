import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random insect species.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * insect(fakerCore) // 'Pyramid ant'
 *
 * @since 5.5.0
 */
export function insect(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.animal.insect);
}
