import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random snake species.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * snake(fakerCore) // 'Eyelash viper'
 *
 * @since 5.5.0
 */
export function snake(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.animal.snake);
}
