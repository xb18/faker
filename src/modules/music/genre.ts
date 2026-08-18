import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random music genre.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * genre(fakerCore) // 'Reggae'
 *
 * @since 5.2.0
 */
export function genre(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.music.genre);
}
