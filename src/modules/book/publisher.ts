import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random publisher.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * publisher(fakerCore) // 'Addison-Wesley'
 *
 * @since 9.1.0
 */
export function publisher(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.book.publisher);
}
