import type { FakerCore } from '../../core';
import type { PersonEntryDefinition } from '../../definitions/person';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random person suffix.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * suffix(fakerCore) // 'DDS'
 *
 * @since 8.0.0
 */
export function suffix(fakerCore: FakerCore): string {
  // TODO @Shinigami92 2022-03-21: Add female_suffix and male_suffix
  return arrayElement(fakerCore, fakerCore.locale.person.suffix);
}
