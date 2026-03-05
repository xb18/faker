import type { FakerCore } from '../../core';
import { Faker } from '../../faker';

/**
 * Generates a random localized city name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * city(fakerCore) // 'East Jarretmouth'
 * fakerDE.location.city() // 'Bad Lilianadorf'
 *
 * @since 8.0.0
 */
export function city(fakerCore: FakerCore): string {
  return new Faker(fakerCore).helpers.fake(
    fakerCore.locale.location.city_pattern
  );
}
