import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { NumberOrRange } from '../../utils/types';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random airplane.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * airplane(fakerCore) // { name: 'Airbus A321neo', iataTypeCode: '32Q' }
 *
 * @since 8.0.0
 */
export function airplane(fakerCore: FakerCore): Airplane {
  return arrayElement(fakerCore, fakerCore.locale.airline.airplane);
}
