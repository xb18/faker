import type { FakerCore } from '../../core';
import { directoryPath } from './directory-path';
import { fileName } from './file-name';

/**
 * Returns a file path.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * filePath(fakerCore) // '/usr/local/src/money.dotx'
 *
 * @since 3.1.0
 */
export function filePath(fakerCore: FakerCore): string {
  return `${directoryPath(fakerCore)}/${fileName(fakerCore)}`;
}
