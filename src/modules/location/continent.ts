import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { SimpleModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random continent name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * continent(fakerCore) // 'Asia'
 *
 * @since 9.1.0
 */
export function continent(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.location.continent);
}
