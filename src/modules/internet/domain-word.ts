import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import type { Faker } from '../../faker';
import { toBase64Url } from '../../internal/base64';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { adjective } from '../word/adjective';
import { noun } from '../word/noun';
import { charMapping } from './_char-mappings';

/**
 * Generates a random domain word.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * domainWord(fakerCore) // 'close-reality'
 * domainWord(fakerCore) // 'weird-cytoplasm'
 *
 * @since 2.0.1
 */
export function domainWord(fakerCore: FakerCore): string {
  // Generate an ASCII "word" in the form `noun-adjective`
  // For locales with non-ASCII characters, we fall back to lorem words, or a random string

  const word1 = makeValidDomainWordSlug(fakerCore, adjective(fakerCore));
  const word2 = makeValidDomainWordSlug(fakerCore, noun(fakerCore));
  return `${word1}-${word2}`.toLowerCase();
}
