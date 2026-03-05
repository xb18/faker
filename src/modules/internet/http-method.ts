import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

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
