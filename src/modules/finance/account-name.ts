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
 * Generates a random account name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * accountName(fakerCore) // 'Personal Loan Account'
 *
 * @since 2.0.1
 */
export function accountName(fakerCore: FakerCore): string {
  return [
    arrayElement(fakerCore, fakerCore.locale.finance.account_type),
    'Account',
  ].join(' ');
}
