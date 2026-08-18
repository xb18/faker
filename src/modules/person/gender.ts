import type { FakerCore } from '../../core';
import type { PersonEntryDefinition } from '../../definitions/person';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random gender.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @see sex(fakerCore): For generating a binary-gender value.
 *
 * @example
 * gender(fakerCore) // 'Trans*Man'
 *
 * @since 8.0.0
 */
export function gender(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.person.gender);
}
