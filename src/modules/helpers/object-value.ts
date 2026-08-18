import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { SimpleModuleBase } from '../../internal/module-base';
import type { SimpleFaker } from '../../simple-faker';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { NumberOrRange } from '../../utils/types';
import { fakeEval } from './_eval';
import { luhnCheckValue } from './_luhn-check';
import { objectKey } from './object-key';

/**
 * Returns a random value from the given object.
 *
 * @template T The type of object to select from.
 *
 * @param fakerCore The FakerCore to use.
 * @param object The object to be used.
 *
 * @throws {FakerError} If the given object is empty.
 *
 * @example
 * objectValue(fakerCore, { Cheetah: 120, Falcon: 390, Snail: 0.03 }) // 390
 *
 * @since 6.3.0
 */
export function objectValue<const T extends Record<string, unknown>>(
  fakerCore: FakerCore,
  object: T
): T[keyof T] {
  const key = objectKey(fakerCore, object);
  return object[key];
}
