import type { FakerCore } from '../../core';
import { Faker } from '../../faker';

/**
 * Generates a random descriptive product name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * productName(fakerCore) // 'Incredible Soft Gloves'
 *
 * @since 3.0.0
 */
export function productName(fakerCore: FakerCore): string {
  return new Faker(fakerCore).helpers.fake(
    fakerCore.locale.commerce.product_name.pattern
  );
}
