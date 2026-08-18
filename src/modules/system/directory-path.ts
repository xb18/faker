import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import type { NumberOrRange } from '../../utils/types';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a directory path.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * directoryPath(fakerCore) // '/etc/mail'
 *
 * @since 3.1.0
 */
export function directoryPath(fakerCore: FakerCore): string {
  const paths = fakerCore.locale.system.directory_path;
  return arrayElement(fakerCore, paths);
}
