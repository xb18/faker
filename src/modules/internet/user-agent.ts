import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { toBase64Url } from '../../internal/base64';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { charMapping } from './_char-mappings';

/**
 * Generates a random user agent string.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * userAgent(fakerCore)
 * // 'Mozilla/5.0 (iPhone; CPU iPhone OS 11_1 like Mac OS X) AppleWebKit/537.19.86 (KHTML, like Gecko) Version/18_3 Mobile/15E148 Safari/598.43'
 *
 * @since 2.0.1
 */
export function userAgent(fakerCore: FakerCore): string {
  return new Faker(fakerCore).helpers.fake(
    fakerCore.locale.internet.user_agent_pattern
  );
}
