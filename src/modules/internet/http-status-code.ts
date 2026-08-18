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
 * Generates a random HTTP status code.
 *
 * @param fakerCore The FakerCore to use.
 * @param options Options object.
 * @param options.types A list of the HTTP status code types that should be used.
 *
 * @example
 * httpStatusCode(fakerCore) // 200
 * httpStatusCode(fakerCore, { types: ['success', 'serverError'] }) // 500
 *
 * @since 7.0.0
 */
export function httpStatusCode(
  fakerCore: FakerCore,
  options: {
    /**
     * A list of the HTTP status code types that should be used.
     *
     * @default Object.keys(faker.definitions.internet.http_status_code)
     */
    types?: ReadonlyArray<HTTPStatusCodeType>;
  } = {}
): number {
  const {
    types = Object.keys(
      fakerCore.locale.internet.http_status_code
    ) as HTTPStatusCodeType[],
  } = options;
  const httpStatusCodeType = arrayElement(fakerCore, types);
  return arrayElement(
    fakerCore,
    fakerCore.locale.internet.http_status_code[httpStatusCodeType]
  );
}
