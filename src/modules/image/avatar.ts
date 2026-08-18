import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { toBase64 } from '../../internal/base64';
import { deprecated } from '../../internal/deprecated';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';
import type { SexType } from '../person';

/**
 * Generates a random avatar image url.
 *
 * @param fakerCore The FakerCore to use.
 * @remark This method sometimes generates a random string representing an URL from GitHub by using a random user ID. Faker is not responsible for the content of the image or the service providing it.
 *
 * @example
 * avatar(fakerCore)
 * // 'https://avatars.githubusercontent.com/u/97165289'
 *
 * @since 2.0.1
 */
export function avatar(fakerCore: FakerCore): string {
  // Add new avatar providers here, when adding a new one.
  const avatarMethod = arrayElement(fakerCore, [
    this.personPortrait,
    this.avatarGitHub,
  ]);
  return avatarMethod();
}
