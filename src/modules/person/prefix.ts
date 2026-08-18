import type { FakerCore } from '../../core';
import type { PersonEntryDefinition } from '../../definitions/person';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random person prefix.
 *
 * @param fakerCore The FakerCore to use.
 * @param sex The optional sex to use. Can be either `'female'` or `'male'`.
 *
 * @example
 * prefix(fakerCore) // 'Miss'
 * prefix(fakerCore, 'female') // 'Ms.'
 * prefix(fakerCore, 'male') // 'Mr.'
 *
 * @since 8.0.0
 */
export function prefix(fakerCore: FakerCore, sex?: SexType): string {
  return arrayElement(
    fakerCore,
    selectDefinition(fakerCore, sex, fakerCore.locale.person.prefix)
  );
}
