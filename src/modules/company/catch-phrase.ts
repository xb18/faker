import type { FakerCore } from '../../core';
import { catchPhraseAdjective } from './catch-phrase-adjective';
import { catchPhraseDescriptor } from './catch-phrase-descriptor';
import { catchPhraseNoun } from './catch-phrase-noun';

/**
 * Generates a random catch phrase that can be displayed to an end user.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * catchPhrase(fakerCore) // 'Upgradable systematic flexibility'
 *
 * @since 2.0.1
 */
export function catchPhrase(fakerCore: FakerCore): string {
  return [
    catchPhraseAdjective(fakerCore),
    catchPhraseDescriptor(fakerCore),
    catchPhraseNoun(fakerCore),
  ].join(' ');
}
