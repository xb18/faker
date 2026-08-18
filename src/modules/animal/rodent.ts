import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random rodent breed.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * rodent(fakerCore) // 'Cuscomys ashanika'
 *
 * @since 7.4.0
 */
export function rodent(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.animal.rodent);
}
