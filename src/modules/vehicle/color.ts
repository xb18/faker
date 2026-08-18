import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { human } from '../color/human';

/**
 * Returns a vehicle color.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * color(fakerCore) // 'red'
 *
 * @since 5.0.0
 */
export function color(fakerCore: FakerCore): string {
  return human(fakerCore);
}
