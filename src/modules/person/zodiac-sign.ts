import type { FakerCore } from '../../core';
import type { PersonEntryDefinition } from '../../definitions/person';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random zodiac sign.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * zodiacSign(fakerCore) // 'Pisces'
 *
 * @since 8.0.0
 */
export function zodiacSign(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.person.western_zodiac_sign);
}
