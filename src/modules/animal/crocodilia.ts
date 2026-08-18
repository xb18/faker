import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random crocodilian species.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * crocodilia(fakerCore) // 'Philippine Crocodile'
 *
 * @since 5.5.0
 */
export function crocodilia(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.animal.crocodilia);
}
