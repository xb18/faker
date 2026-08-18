import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { int } from '../number/int';
import { fromCharacters } from '../string/from-characters';
import type { BitcoinAddressFamilyType, BitcoinNetworkType } from './_bitcoin';
import {
  BitcoinAddressFamily,
  BitcoinAddressSpecs,
  BitcoinNetwork,
} from './_bitcoin';
import iban from './_iban';

/**
 * Generates a random Litecoin address.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * litecoinAddress(fakerCore) // 'MoQaSTGWBRXkWfyxKbNKuPrAWGELzcW'
 *
 * @since 5.0.0
 */
export function litecoinAddress(fakerCore: FakerCore): string {
  const addressLength = int(fakerCore, { min: 26, max: 33 });

  const address =
    fromCharacters(fakerCore, 'LM3') +
    fromCharacters(
      fakerCore,
      '123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ',
      addressLength - 1
    );

  return address;
}
