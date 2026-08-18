import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { SimpleModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';

/**
 * Generates a random localized street name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * street(fakerCore) // 'Schroeder Isle'
 *
 * @since 8.0.0
 */
export function street(fakerCore: FakerCore): string {
  return new Faker(fakerCore).helpers.fake(
    fakerCore.locale.location.street_pattern
  );
}
