import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { Casing } from '../../utils/types';
import { enumValue } from '../helpers/enum-value';

/**
 * Returns a random CSS-supported color space name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * cssSupportedSpace(fakerCore) // 'display-p3'
 *
 * @since 7.0.0
 */
export function cssSupportedSpace(fakerCore: FakerCore): CssSpaceType {
  return enumValue(fakerCore, CssSpace);
}
