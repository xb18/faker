import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random buzz adjective that can be used to demonstrate data being viewed by a manager.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * buzzAdjective(fakerCore) // 'one-to-one'
 *
 * @since 8.0.0
 */
export function buzzAdjective(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.company.buzz_adjective);
}
