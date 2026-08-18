import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { BitcoinAddressFamilyType, BitcoinNetworkType } from './_bitcoin';
import {
  BitcoinAddressFamily,
  BitcoinAddressSpecs,
  BitcoinNetwork,
} from './_bitcoin';
import iban from './_iban';

/**
 * Generates a random transaction description.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * transactionDescription(fakerCore)
 * // 'payment transaction at Emard LLC using card ending with ****9187 for HNL 506.57 in account ***2584.'
 *
 * @since 5.1.0
 */
export function transactionDescription(fakerCore: FakerCore): string {
  return new Faker(fakerCore).helpers.fake(
    fakerCore.locale.finance.transaction_description_pattern
  );
}
