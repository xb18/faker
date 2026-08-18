import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { LengthStrategyType, NumberOrRange } from '../../utils/types';
import { arrayElement } from '../helpers/array-element';
import { filterWordListByLength } from '../word/_filter-word-list-by-length';

/**
 * Generates a random text based on a random lorem method.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * text(fakerCore) // 'Doloribus autem non quis vero quia.'
 * text(fakerCore)
 * // 'Rerum eum reiciendis id ipsa hic dolore aut laborum provident.
 * // Quis beatae quis corporis veritatis corrupti ratione delectus sapiente ut.
 * // Quis ut dolor dolores facilis possimus tempore voluptates.
 * // Iure nam officia optio cumque.
 * // Dolor tempora iusto.'
 *
 * @since 3.1.0
 */
export function text(fakerCore: FakerCore): string {
  const methods: Array<keyof LoremModule> = [
    'sentence',
    'sentences',
    'paragraph',
    'paragraphs',
    'lines',
  ];

  const method = arrayElement(fakerCore, methods);

  return this[method]();
}
