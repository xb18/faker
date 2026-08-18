import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a fuel type.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * fuel(fakerCore) // 'Electric'
 *
 * @since 5.0.0
 */
export function fuel(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.vehicle.fuel);
}
