import type { FakerCore } from '../../core';
import { human } from '../color/human';

/**
 * Returns a vehicle color.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * color(fakerCore) // 'red'
 *
 * @since 5.0.0
 */
export function color(fakerCore: FakerCore): string {
  return human(fakerCore);
}
