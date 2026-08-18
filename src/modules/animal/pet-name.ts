import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random pet name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * petName(fakerCore) // 'Coco'
 *
 * @since 9.2.0
 */
export function petName(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.animal.pet_name);
}
