import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { hexadecimal } from '../string/hexadecimal';

/**
 * Returns a MongoDB [ObjectId](https://docs.mongodb.com/manual/reference/method/ObjectId/) string.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * mongodbObjectId(fakerCore) // 'e175cac316a79afdd0ad3afb'
 *
 * @since 6.2.0
 */
export function mongodbObjectId(fakerCore: FakerCore): string {
  return hexadecimal(fakerCore, {
    length: 24,
    casing: 'lower',
    prefix: '',
  });
}
