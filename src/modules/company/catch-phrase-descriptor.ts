import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random catch phrase descriptor that can be displayed to an end user.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * catchPhraseDescriptor(fakerCore) // 'composite'
 *
 * @since 2.0.1
 */
export function catchPhraseDescriptor(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.company.descriptor);
}
