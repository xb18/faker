import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';
import { calculateUPCCheckDigit } from './_upc-check-digit';

/**
 * Returns a department inside a shop.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * department(fakerCore) // 'Garden'
 *
 * @since 3.0.0
 */
export function department(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.commerce.department);
}
