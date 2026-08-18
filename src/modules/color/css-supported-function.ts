import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { Casing } from '../../utils/types';
import { enumValue } from '../helpers/enum-value';

/**
 * Returns a random CSS-supported color function name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * cssSupportedFunction(fakerCore) // 'rgb'
 *
 * @since 7.0.0
 */
export function cssSupportedFunction(fakerCore: FakerCore): CssFunctionType {
  return enumValue(fakerCore, CssFunction);
}
