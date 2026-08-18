import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random hacker/IT noun.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * noun(fakerCore) // 'system'
 *
 * @since 2.0.1
 */
export function noun(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.hacker.noun);
}
