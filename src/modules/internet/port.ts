import type { FakerCore } from '../../core';
import { int } from '../number/int';

/**
 * Generates a random port number.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * port(fakerCore) // 9414
 *
 * @since 5.4.0
 */
export function port(fakerCore: FakerCore): number {
  return int(fakerCore, { min: 1, max: 65535 });
}
