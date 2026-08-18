import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { toBase64Url } from '../../internal/base64';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { hexadecimal } from '../string/hexadecimal';
import { charMapping } from './_char-mappings';

/**
 * Generates a random IPv6 address.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * ipv6(fakerCore) // '269f:1230:73e3:318d:842b:daab:326d:897b'
 *
 * @since 4.0.0
 */
export function ipv6(fakerCore: FakerCore): string {
  return Array.from({ length: 8 }, () =>
    hexadecimal(fakerCore, {
      length: 4,
      casing: 'lower',
      prefix: '',
    })
  ).join(':');
}
