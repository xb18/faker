import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { hexadecimal } from '../string/hexadecimal';
import type { BitcoinAddressFamilyType, BitcoinNetworkType } from './_bitcoin';
import {
  BitcoinAddressFamily,
  BitcoinAddressSpecs,
  BitcoinNetwork,
} from './_bitcoin';
import iban from './_iban';

/**
 * Creates a random, non-checksum Ethereum address.
 *
 * To generate a checksummed Ethereum address (with specific per character casing), wrap this method in a custom method and use third-party libraries to transform the result.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * ethereumAddress(fakerCore) // '0xf03dfeecbafc5147241cc4c4ca20b3c9dfd04c4a'
 *
 * @since 5.0.0
 */
export function ethereumAddress(fakerCore: FakerCore): string {
  const address = hexadecimal(fakerCore, {
    length: 40,
    casing: 'lower',
  });
  return address;
}
