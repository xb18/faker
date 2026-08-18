import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { NumberOrRange } from '../../utils/types';
import { int } from '../number/int';

/**
 * Returns a [semantic version](https://semver.org).
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * semver(fakerCore) // '1.15.2'
 *
 * @since 3.1.0
 */
export function semver(fakerCore: FakerCore): string {
  return [int(fakerCore, 9), int(fakerCore, 20), int(fakerCore, 20)].join('.');
}
