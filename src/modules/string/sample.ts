import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import { CROCKFORDS_BASE32, dateToBase32 } from '../../internal/base32';
import { toDate } from '../../internal/date';
import { SimpleModuleBase } from '../../internal/module-base';
import type { LiteralUnion } from '../../internal/types';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { Casing, NumberOrRange } from '../../utils/types';
import { rangeToNumber } from '../helpers/range-to-number';
import { int } from '../number/int';
import { uuidV4, uuidV7 } from './_uuid';

/**
 * Returns a string containing UTF-16 chars between 33 and 125 (`!` to `}`).
 *
 * @param fakerCore The FakerCore to use.
 * @param length The length of the string to generate either as a fixed length or as a length range. Defaults to `10`.
 * @param length.min The minimum length of the string to generate.
 * @param length.max The maximum length of the string to generate.
 *
 * @example
 * sample(fakerCore) // 'Zo!.:*e>wR'
 * sample(fakerCore, 5) // '6Bye8'
 * sample(fakerCore, { min: 5, max: 10 }) // 'FeKunG'
 *
 * @since 8.0.0
 */
export function sample(
  fakerCore: FakerCore,
  length: NumberOrRange = 10
): string {
  length = rangeToNumber(fakerCore, length);

  const charCodeOption = {
    min: 33,
    max: 125,
  };

  let returnString = '';

  while (returnString.length < length) {
    returnString += String.fromCodePoint(int(fakerCore, charCodeOption));
  }

  return returnString;
}
