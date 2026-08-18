import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { numeric } from '../string/numeric';
import type { BitcoinAddressFamilyType, BitcoinNetworkType } from './_bitcoin';
import {
  BitcoinAddressFamily,
  BitcoinAddressSpecs,
  BitcoinNetwork,
} from './_bitcoin';
import iban from './_iban';

/**
 * Generates a random credit card CVV.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * creditCardCVV(fakerCore) // '506'
 *
 * @since 5.0.0
 */
export function creditCardCVV(fakerCore: FakerCore): string {
  return numeric(fakerCore, { length: 3, allowLeadingZeros: true });
}
