import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';

/**
 * Generates a random company name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * name(fakerCore) // 'Zieme, Hauck and McClure'
 *
 * @since 7.4.0
 */
export function name(fakerCore: FakerCore): string {
  return new Faker(fakerCore).helpers.fake(
    fakerCore.locale.company.name_pattern
  );
}
