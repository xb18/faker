import type { FakerCore } from '../../core';
import type { DateEntryDefinition } from '../../definitions';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { toDate } from '../../internal/date';
import { assertLocaleData } from '../../internal/locale-proxy';
import { SimpleModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { NumberOrRange } from '../../utils/types';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random IANA time zone name.
 *
 * The returned time zone is not tied to the current locale.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @see [IANA Time Zone Database](https://www.iana.org/time-zones)
 * @see locationTimeZone(fakerCore): For generating a timezone based on the current locale.
 *
 * @example
 * locationTimeZone(fakerCore) // 'Pacific/Guam'
 *
 * @since 9.0.0
 */
export function timeZone(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.date.time_zone);
}
