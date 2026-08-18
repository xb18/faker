import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { toBase64Url } from '../../internal/base64';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { boolean } from '../datatype/boolean';
import { charMapping } from './_char-mappings';
import { ipv4 } from './ipv4';
import { ipv6 } from './ipv6';

/**
 * Generates a random IPv4 or IPv6 address.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * ip(fakerCore) // '245.108.222.0'
 * ip(fakerCore) // '4e5:f9c5:4337:abfd:9caf:1135:41ad:d8d3'
 *
 * @since 2.0.1
 */
export function ip(fakerCore: FakerCore): string {
  return boolean(fakerCore) ? ipv4(fakerCore) : ipv6(fakerCore);
}
