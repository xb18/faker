import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { noun as hackerNoun } from '../hacker/noun';
import { verb as hackerVerb } from '../hacker/verb';

/**
 * Generates a random branch name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * branch(fakerCore) // 'feed-parse'
 *
 * @since 5.0.0
 */
export function branch(fakerCore: FakerCore): string {
  const noun = hackerNoun(fakerCore).replace(' ', '-');
  const verb = hackerVerb(fakerCore).replace(' ', '-');
  return `${noun}-${verb}`;
}
