import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';
import type { BitcoinAddressFamilyType, BitcoinNetworkType } from './_bitcoin';
import {
  BitcoinAddressFamily,
  BitcoinAddressSpecs,
  BitcoinNetwork,
} from './_bitcoin';
import iban from './_iban';

/**
 * Returns a random currency object, containing `code`, `name`, `symbol`, and `numericCode` properties.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @see currencyCode(fakerCore): For generating specifically the currency code.
 * @see currencyName(fakerCore): For generating specifically the currency name.
 * @see currencySymbol(fakerCore): For generating specifically the currency symbol.
 * @see currencyNumericCode(fakerCore): For generating specifically the currency numeric code.
 *
 * @example
 * currency(fakerCore) // { code: 'USD', name: 'US Dollar', symbol: '$', numericCode: '840' }
 *
 * @since 8.0.0
 */
export function currency(fakerCore: FakerCore): Currency {
  return arrayElement(fakerCore, fakerCore.locale.finance.currency);
}
