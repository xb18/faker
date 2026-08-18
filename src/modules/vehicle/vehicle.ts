import type { FakerCore } from '../../core';
import { manufacturer } from './manufacturer';
import { model } from './model';

/**
 * Returns a random vehicle.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * vehicle(fakerCore) // 'BMW Explorer'
 *
 * @since 5.0.0
 */
export function vehicle(fakerCore: FakerCore): string {
  return `${manufacturer(fakerCore)} ${model(fakerCore)}`;
}
