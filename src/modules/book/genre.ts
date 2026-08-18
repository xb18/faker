import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random genre.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * genre(fakerCore) // 'Fantasy'
 *
 * @since 9.1.0
 */
export function genre(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.book.genre);
}
