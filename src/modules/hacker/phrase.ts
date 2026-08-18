import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';

/**
 * Generates a random hacker/IT phrase.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * phrase(fakerCore)
 * // 'If we override the card, we can get to the HDD feed through the back-end HDD sensor!'
 *
 * @since 2.0.1
 */
export function phrase(fakerCore: FakerCore): string {
  return new Faker(fakerCore).helpers.fake(fakerCore.locale.hacker.phrase);
}
