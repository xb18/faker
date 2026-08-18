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
 * Returns a random currency symbol.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * currencySymbol(fakerCore) // '$'
 *
 * @since 2.0.1
 */
export function currencySymbol(fakerCore: FakerCore): string {
  let symbol: string;
  do {
    symbol = currency(fakerCore).symbol;
  } while (symbol.length === 0);

  return symbol;
}
