import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { toBase64Url } from '../../internal/base64';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';
import { charMapping } from './_char-mappings';

/**
 * Generates a random JWT (JSON Web Token) Algorithm.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @see jwt(fakerCore): For generating random JWT (JSON Web Token).
 *
 * @example
 * jwtAlgorithm(fakerCore) // 'HS256'
 * jwtAlgorithm(fakerCore) // 'RS512'
 *
 * @since 9.1.0
 */
export function jwtAlgorithm(fakerCore: FakerCore): string {
  return arrayElement(fakerCore, fakerCore.locale.internet.jwt_algorithm);
}
