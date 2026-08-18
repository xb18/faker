import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { NumberOrRange } from '../../utils/types';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random airline.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * airline(fakerCore) // { name: 'American Airlines', iataCode: 'AA' }
 *
 * @since 8.0.0
 */
export function airline(fakerCore: FakerCore): Airline {
  return arrayElement(fakerCore, fakerCore.locale.airline.airline);
}
