import type { FakerCore } from '../../core';
import { Faker } from '../../faker';
import { ModuleBase } from '../../internal/module-base';
import { getDefaultRefDate } from '../../utils/get-default-ref-date';
import { arrayElement } from '../helpers/array-element';

/**
 * Returns a random periodic table element.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * chemicalElement(fakerCore) // { symbol: 'H', name: 'Hydrogen', atomicNumber: 1 }
 * chemicalElement(fakerCore) // { symbol: 'Xe', name: 'Xenon', atomicNumber: 54 }
 * chemicalElement(fakerCore) // { symbol: 'Ce', name: 'Cerium', atomicNumber: 58 }
 *
 * @since 7.2.0
 */
export function chemicalElement(fakerCore: FakerCore): ChemicalElement {
  return arrayElement(fakerCore, fakerCore.locale.science.chemical_element);
}
