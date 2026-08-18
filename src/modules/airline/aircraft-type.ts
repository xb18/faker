import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { NumberOrRange } from '../../utils/types';
import { enumValue } from '../helpers/enum-value';

/**
 * Returns a random aircraft type.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * aircraftType(fakerCore) // 'narrowbody'
 *
 * @since 8.0.0
 */
export function aircraftType(fakerCore: FakerCore): AircraftType {
  return enumValue(fakerCore, Aircraft);
}
