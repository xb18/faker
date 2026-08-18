import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { alpha } from '../string/alpha';
import { alphanumeric } from '../string/alphanumeric';
import { numeric } from '../string/numeric';

/**
 * Returns a vehicle identification number (VIN).
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * vin(fakerCore) // 'YV1MH682762184654'
 *
 * @since 5.0.0
 */
export function vin(fakerCore: FakerCore): string {
  const exclude = ['o', 'i', 'q', 'O', 'I', 'Q'];
  const vin = `${alphanumeric(fakerCore, {
    length: 10,
    casing: 'upper',
    exclude,
  })}${alpha(fakerCore, {
    length: 1,
    casing: 'upper',
    exclude,
  })}${alphanumeric(fakerCore, {
    length: 1,
    casing: 'upper',
    exclude,
  })}${numeric(fakerCore, { length: 5, allowLeadingZeros: true })}`;

  return `${vin.slice(0, 8)}${vinCheckDigit(vin)}${vin.slice(9)}`;
}
