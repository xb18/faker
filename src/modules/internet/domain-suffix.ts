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
 * Returns a random domain suffix.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * domainSuffix(fakerCore) // 'com'
 * domainSuffix(fakerCore) // 'name'
 *
 * @since 2.0.1
 */
export function domainSuffix(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.internet.domain_suffix);
}
