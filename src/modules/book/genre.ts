import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random genre.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * genre(fakerCore) // 'Fantasy'
 *
 * @since 9.1.0
 */
export function genre(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.book.genre);
}
