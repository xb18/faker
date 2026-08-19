import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import { CROCKFORDS_BASE32, dateToBase32 } from '../../internal/base32';
import { toDate } from '../../internal/date';
import { SimpleModuleBase } from '../../internal/module-base';
import type { LiteralUnion } from '../../internal/types';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { Casing, NumberOrRange } from '../../utils/types';
import { uuidV4, uuidV7 } from './_uuid';
import { fromCharacters } from './from-characters';

/**
 * Returns an [octal](https://en.wikipedia.org/wiki/Octal) string.
 *
 * @param fakerCore The FakerCore to use.
 * @param options The optional options object.
 * @param options.length The length of the string (excluding the prefix) to generate either as a fixed length or as a length range. Defaults to `1`.
 * @param options.prefix Prefix for the generated number. Defaults to `'0o'`.
 *
 * @see numberOctal(fakerCore): For generating an octal number (within a range).
 *
 * @example
 * octal(fakerCore) // '0o3'
 * octal(fakerCore, { length: 10 }) // '0o1526216210'
 * octal(fakerCore, { length: { min: 5, max: 10 } }) // '0o15263214'
 * octal(fakerCore, { prefix: '0o' }) // '0o7'
 * octal(fakerCore, { length: 10, prefix: 'oct_' }) // 'oct_1542153414'
 *
 * @since 8.0.0
 */
export function octal(
  fakerCore: FakerCore,
  options: {
    /**
     * The length of the string (excluding the prefix) to generate either as a fixed length or as a length range.
     *
     * @default 1
     */
    length?: NumberOrRange;
    /**
     * Prefix for the generated number.
     *
     * @default '0o'
     */
    prefix?: string;
  } = {}
): string {
  const { prefix = '0o' } = options;

  let result = prefix;
  result += fromCharacters(
    fakerCore,
    ['0', '1', '2', '3', '4', '5', '6', '7'],
    options.length ?? 1
  );
  return result;
}
