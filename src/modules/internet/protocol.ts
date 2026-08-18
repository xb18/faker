import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { toBase64Url } from '../../internal/base64';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';
import { charMapping } from './_char-mappings';

/**
 * Returns a random web protocol. Either `http` or `https`.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * protocol(fakerCore) // 'http'
 *
 * @since 2.1.5
 */
export function protocol(fakerCore: FakerCore): 'http' | 'https' {
  const protocols: ['http', 'https'] = ['http', 'https'];
  return arrayElement(fakerCore, protocols);
}
