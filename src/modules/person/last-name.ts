import type { FakerCore } from '../../core';
import type { PersonEntryDefinition } from '../../definitions/person';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';
import { weightedArrayElement } from '../helpers/weighted-array-element';

/**
 * Returns a random last name.
 *
 * @param fakerCore The FakerCore to use.
 * @param sex The optional sex to use.
 * Can be either `'female'` or `'male'`.
 *
 * @example
 * lastName(fakerCore) // 'Hauck'
 * lastName(fakerCore, 'female') // 'Grady'
 * lastName(fakerCore, 'male') // 'Barton'
 *
 * @since 8.0.0
 */
export function lastName(fakerCore: FakerCore, sex?: SexType): string {
  const patterns = fakerCore.locale.raw.person?.last_name_pattern;
  if (patterns != null) {
    const pattern = weightedArrayElement(
      fakerCore,
      selectDefinition(fakerCore, sex, patterns)
    );
    return new Faker(fakerCore).helpers.fake(pattern);
  }

  return arrayElement(
    fakerCore,
    selectDefinition(fakerCore, sex, fakerCore.locale.person.last_name)
  );
}
