import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { toBase64 } from '../../internal/base64';
import { deprecated } from '../../internal/deprecated';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { int } from '../number/int';
import type { SexType } from '../person';

/**
 * Generates a random avatar from GitHub.
 *
 * @param fakerCore The FakerCore to use.
 * @remark This method generates a random string representing an URL from GitHub by using a random user ID. Faker is not responsible for the content of the image or the service providing it.
 *
 * @example
 * avatarGitHub(fakerCore)
 * // 'https://avatars.githubusercontent.com/u/97165289'
 *
 * @since 8.0.0
 */
export function avatarGitHub(fakerCore: FakerCore): string {
  return `https://avatars.githubusercontent.com/u/${int(fakerCore, 100000000)}`;
}
