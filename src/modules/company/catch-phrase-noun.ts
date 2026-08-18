import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random catch phrase noun that can be displayed to an end user.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * catchPhraseNoun(fakerCore) // 'leverage'
 *
 * @since 2.0.1
 */
export function catchPhraseNoun(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.company.noun);
}
