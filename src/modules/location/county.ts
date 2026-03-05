import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random localized county, or other equivalent second-level administrative entity for the locale's country such as a district or department.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * fakerEN_GB.location.county() // 'Cambridgeshire'
 * fakerEN_US.location.county() // 'Monroe County'
 *
 * @since 8.0.0
 */
export function county(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.location.county);
}
