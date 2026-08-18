import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random hacker/IT abbreviation.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * abbreviation(fakerCore) // 'THX'
 *
 * @since 2.0.1
 */
export function abbreviation(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.hacker.abbreviation);
}
