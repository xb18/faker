import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { SimpleModuleBase } from '../../internal/module-base';
import type { SimpleFaker } from '../../simple-faker';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { NumberOrRange } from '../../utils/types';
import { int } from '../number/int';
import { fakeEval } from './_eval';
import { luhnCheckValue } from './_luhn-check';

/**
 * Helper method that converts the given number or range to a number.
 *
 * @param fakerCore The FakerCore to use.
 * @param numberOrRange The number or range to convert.
 * @param numberOrRange.min The minimum value for the range.
 * @param numberOrRange.max The maximum value for the range.
 *
 * @example
 * rangeToNumber(fakerCore, 1) // 1
 * rangeToNumber(fakerCore, { min: 1, max: 10 }) // 5
 *
 * @since 8.0.0
 */
export function rangeToNumber(
  fakerCore: FakerCore,
  numberOrRange: NumberOrRange
): number {
  if (typeof numberOrRange === 'number') {
    return numberOrRange;
  }

  return int(fakerCore, numberOrRange);
}
