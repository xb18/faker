import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { toBase64Url } from '../../internal/base64';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { boolean } from '../datatype/boolean';
import { charMapping } from './_char-mappings';
import { domainName } from './domain-name';

/**
 * Generates a random http(s) url.
 *
 * @param fakerCore The FakerCore to use.
 * @param options Optional options object.
 * @param options.appendSlash Whether to append a slash to the end of the url (path). Defaults to a random boolean value.
 * @param options.protocol The protocol to use. Defaults to `'https'`.
 *
 * @example
 * url(fakerCore) // 'https://remarkable-hackwork.info'
 * url(fakerCore, { appendSlash: true }) // 'https://slow-timer.info/'
 * url(fakerCore, { protocol: 'http', appendSlash: false }) // 'http://www.terrible-idea.com'
 *
 * @since 2.1.5
 */
export function url(
  fakerCore: FakerCore,
  options: {
    /**
     * Whether to append a slash to the end of the url (path).
     *
     * @default datatypeBoolean(fakerCore)
     */
    appendSlash?: boolean;
    /**
     * The protocol to use.
     *
     * @default 'https'
     */
    protocol?: HTTPProtocolType;
  } = {}
): string {
  const { appendSlash = boolean(fakerCore), protocol = 'https' } = options;
  return `${protocol}://${domainName(fakerCore)}${appendSlash ? '/' : ''}`;
}
