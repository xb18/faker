import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { calculateUPCCheckDigit } from './_upc-check-digit';

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
  const patterns = fakerCore.locale.commerce.product_name.pattern;
  return new Faker(fakerCore).helpers.fake(patterns);
}
