import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

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
