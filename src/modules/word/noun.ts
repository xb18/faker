import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { LengthStrategyType, NumberOrRange } from '../../utils/types';
import { arrayElement } from '../helpers/array-element';
import { filterWordListByLength } from './_filter-word-list-by-length';

/**
 * Returns a random noun.
 *
 * @param fakerCore The FakerCore to use.
 * @param options The expected length of the word or the options to use.
 * @param options.length The expected length of the word.
 * @param options.strategy The strategy to apply when no words with a matching length are found.
 *
 * Defaults to `'fail'`.
 *
 * @example
 * noun(fakerCore) // 'external'
 * noun(fakerCore, 5) // 'front'
 * noun(fakerCore, { strategy: 'shortest' }) // 'ad'
 * noun(fakerCore, { length: { min: 5, max: 7 }, strategy: "fail" }) // 'average'
 *
 * @since 6.0.0
 */
export function noun(
  fakerCore: FakerCore,
  options:
    | number
    | {
        /**
         * The expected length of the word.
         */
        length?: NumberOrRange;
        /**
         * The strategy to apply when no words with a matching length are found.
         *
         * @default 'fail'
         */
        strategy?: LengthStrategyType;
      } = {}
): string {
  if (typeof options === 'number') {
    options = { length: options };
  }

  return arrayElement(
    fakerCore,
    filterWordListByLength({
      ...options,
      wordList: fakerCore.locale.word.noun,
    })
  );
}
