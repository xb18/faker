import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random album name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * album(fakerCore) // '1989'
 *
 * @since 9.0.0
 */
export function album(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.music.album);
}
