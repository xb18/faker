import type { FakerCore } from '../../core';
import type { PersonEntryDefinition } from '../../definitions/person';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random job type.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * jobType(fakerCore) // 'Assistant'
 *
 * @since 8.0.0
 */
export function jobType(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.person.job_type);
}
