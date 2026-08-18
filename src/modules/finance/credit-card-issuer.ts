import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { objectKey } from '../helpers/object-key';
import type { BitcoinAddressFamilyType, BitcoinNetworkType } from './_bitcoin';
import {
  BitcoinAddressFamily,
  BitcoinAddressSpecs,
  BitcoinNetwork,
} from './_bitcoin';
import iban from './_iban';

/**
 * Returns a random credit card issuer.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * creditCardIssuer(fakerCore) // 'discover'
 *
 * @since 6.3.0
 */
export function creditCardIssuer(fakerCore: FakerCore): string {
  return objectKey(fakerCore, fakerCore.locale.finance.credit_card) as string;
}
