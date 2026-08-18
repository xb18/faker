import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { toBase64Url } from '../../internal/base64';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { int } from '../number/int';
import { charMapping } from './_char-mappings';

/**
 * Generates a random port number.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * port(fakerCore) // 9414
 *
 * @since 5.4.0
 */
export function port(fakerCore: FakerCore): number {
  return int(fakerCore, { min: 1, max: 65535 });
}
