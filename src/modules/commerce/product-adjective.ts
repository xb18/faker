import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';
import { calculateUPCCheckDigit } from './_upc-check-digit';

/**
 * Returns an adjective describing a product.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * productAdjective(fakerCore) // 'Handcrafted'
 *
 * @since 3.0.0
 */
export function productAdjective(fakerCore: FakerCore): string {
  return arrayElement(
    fakerCore,
    fakerCore.locale.commerce.product_name.adjective
  );
}
