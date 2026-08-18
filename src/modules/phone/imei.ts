import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { legacyReplaceSymbolWithNumber } from '../helpers';
import { replaceCreditCardSymbols } from '../helpers/replace-credit-card-symbols';

/**
 * Generates IMEI number.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * imei(fakerCore) // '13-850175-913761-7'
 *
 * @since 6.2.0
 */
export function imei(fakerCore: FakerCore): string {
  return replaceCreditCardSymbols(fakerCore, '##-######-######-L', '#');
}
