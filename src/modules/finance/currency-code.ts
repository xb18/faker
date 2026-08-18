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
import { currency } from './currency';

/**
 * Returns a random currency code.
 * (The short text/abbreviation for the currency (e.g. `US Dollar` -> `USD`))
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * currencyCode(fakerCore) // 'USD'
 *
 * @since 2.0.1
 */
export function currencyCode(fakerCore: FakerCore): string {
  return currency(fakerCore).code;
}
