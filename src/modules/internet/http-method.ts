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
 * Returns a random http method.
 *
 * Can be either of the following:
 *
 * - `GET`
 * - `POST`
 * - `PUT`
 * - `DELETE`
 * - `PATCH`
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * httpMethod(fakerCore) // 'PATCH'
 *
 * @since 5.4.0
 */
export function httpMethod(
  fakerCore: FakerCore
): 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' {
  const httpMethods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'] = [
    'GET',
    'POST',
    'PUT',
    'DELETE',
    'PATCH',
  ];
  return arrayElement(fakerCore, httpMethods);
}
