import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random transaction type.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * transactionType(fakerCore) // 'payment'
 *
 * @since 2.0.1
 */
export function transactionType(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.finance.transaction_type);
}
