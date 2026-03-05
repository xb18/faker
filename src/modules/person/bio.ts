import type { FakerCore } from '../../core';
import { Faker } from '../../faker';

/**
 * Returns a random short biography
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * bio(fakerCore) // 'oatmeal advocate, veteran 🐠'
 *
 * @since 8.0.0
 */
export function bio(fakerCore: FakerCore): string {
  return new Faker(fakerCore).helpers.fake(fakerCore.locale.person.bio_pattern);
}
