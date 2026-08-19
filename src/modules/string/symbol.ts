import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import { CROCKFORDS_BASE32, dateToBase32 } from '../../internal/base32';
import { toDate } from '../../internal/date';
import { SimpleModuleBase } from '../../internal/module-base';
import type { LiteralUnion } from '../../internal/types';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { Casing, NumberOrRange } from '../../utils/types';
import { uuidV4, uuidV7 } from './_uuid';
import { fromCharacters } from './from-characters';

/**
 * Returns a string containing only special characters from the following list:
 *
 * ```txt
 * ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~
 * ```
 *
 * @param fakerCore The FakerCore to use.
 * @param length The length of the string to generate either as a fixed length or as a length range. Defaults to `1`.
 * @param length.min The minimum length of the string to generate.
 * @param length.max The maximum length of the string to generate.
 *
 * @example
 * symbol(fakerCore) // '$'
 * symbol(fakerCore, 5) // '#*!.~'
 * symbol(fakerCore, { min: 5, max: 10 }) // ')|@*>^+'
 *
 * @since 8.0.0
 */
export function symbol(
  fakerCore: FakerCore,
  length: NumberOrRange = 1
): string {
  return fromCharacters(
    fakerCore,
    [
      '!',
      '"',
      '#',
      '$',
      '%',
      '&',
      "'",
      '(',
      ')',
      '*',
      '+',
      ',',
      '-',
      '.',
      '/',
      ':',
      ';',
      '<',
      '=',
      '>',
      '?',
      '@',
      '[',
      '\\',
      ']',
      '^',
      '_',
      '`',
      '{',
      '|',
      '}',
      '~',
    ],
    length
  );
}
