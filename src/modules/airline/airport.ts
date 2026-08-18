import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { NumberOrRange } from '../../utils/types';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random airport.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * airport(fakerCore) // { name: 'Dallas Fort Worth International Airport', iataCode: 'DFW' }
 *
 * @since 8.0.0
 */
export function airport(fakerCore: FakerCore): Airport {
  return arrayElement(fakerCore, fakerCore.locale.airline.airport);
}
