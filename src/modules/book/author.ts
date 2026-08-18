import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random author name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * author(fakerCore) // 'William Shakespeare'
 *
 * @since 9.1.0
 */
export function author(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.book.author);
}
