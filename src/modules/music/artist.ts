import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random artist name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * artist(fakerCore) // 'The Beatles'
 *
 * @since 9.0.0
 */
export function artist(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.music.artist);
}
