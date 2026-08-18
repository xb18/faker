import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random song name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * songName(fakerCore) // 'White Christmas'
 *
 * @since 7.1.0
 */
export function songName(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.music.song_name);
}
