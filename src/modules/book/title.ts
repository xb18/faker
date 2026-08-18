import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random title.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * title(fakerCore) // 'Romeo and Juliet'
 *
 * @since 9.1.0
 */
export function title(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.book.title);
}
