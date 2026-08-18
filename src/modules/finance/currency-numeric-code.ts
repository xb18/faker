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
 * Returns a random currency numeric code.
 * (The ISO 4217 numerical code for a currency (e.g. `US Dollar` -> `840` ))
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * currencyNumericCode(fakerCore) // '840'
 *
 * @since 9.6.0
 */
export function currencyNumericCode(fakerCore: FakerCore): string {
  return currency(fakerCore).numericCode;
}
