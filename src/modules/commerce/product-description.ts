import type { FakerCore } from '../../core';
import { Faker } from '../../faker';

/**
 * Returns a product description.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * productDescription(fakerCore) // 'Featuring Phosphorus-enhanced technology, our Fish offers unparalleled Modern performance'
 *
 * @since 5.0.0
 */
export function productDescription(fakerCore: FakerCore): string {
  return new Faker(fakerCore).helpers.fake(
    fakerCore.locale.commerce.product_description
  );
}
