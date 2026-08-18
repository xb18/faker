import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { Casing } from '../../utils/types';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random human-readable color name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * human(fakerCore) // 'red'
 *
 * @since 7.0.0
 */
export function human(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.color.human);
}
