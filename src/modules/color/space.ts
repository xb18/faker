import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { Casing } from '../../utils/types';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random color space name from the worldwide accepted color spaces.
 * Source: https://en.wikipedia.org/wiki/List_of_color_spaces_and_their_uses
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * space(fakerCore) // 'sRGB'
 *
 * @since 7.0.0
 */
export function space(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.color.space);
}
