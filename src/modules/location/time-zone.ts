import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { SimpleModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random IANA time zone relevant to this locale.
 *
 * The returned time zone is tied to the current locale.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @see [IANA Time Zone Database](https://www.iana.org/time-zones)
 * @see dateTimeZone(fakerCore): For generating a random time zone from all available time zones.
 *
 * @example
 * timeZone(fakerCore) // 'Pacific/Guam'
 *
 * @since 8.0.0
 */
export function timeZone(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.location.time_zone);
}
