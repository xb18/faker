import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { SimpleModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random country name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * country(fakerCore) // 'Greece'
 *
 * @since 8.0.0
 */
export function country(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.location.country);
}
