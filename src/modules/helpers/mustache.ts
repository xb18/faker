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

/**
 * Replaces the `{{placeholder}}` patterns in the given string mustache style.
 *
 * @param fakerCore The FakerCore to use.
 * @param text The template string to parse.
 * @param data The data used to populate the placeholders.
 * This is a record where the key is the template placeholder,
 * whereas the value is either a string or a function suitable for `String.replace()`.
 *
 * @example
 * mustache(fakerCore, 'I found {{count}} instances of "{{word}}".', {
 *   count: () => `${numberInt(fakerCore)}`,
 *   word: "this word",
 * }) // 'I found 57591 instances of "this word".'
 *
 * @since 2.0.1
 */
export function mustache(
  fakerCore: FakerCore,
  text: string | undefined,
  data: Record<string, string | Parameters<string['replace']>[1]>
): string {
  if (text == null) {
    return '';
  }

  for (const p in data) {
    const re = new RegExp(`{{${p}}}`, 'g');
    let value = data[p];
    if (typeof value === 'string') {
      // escape $, source: https://stackoverflow.com/a/6969486/6897682
      value = value.replaceAll('$', '$$$$');
      text = text.replace(re, value);
    } else {
      text = text.replace(re, value);
    }
  }

  return text;
}
