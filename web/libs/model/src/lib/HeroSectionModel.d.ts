import { BlockModel } from './BlockModel';
import { SectionModel } from './SectionModel';

export interface HeroSectionModel extends SectionModel {
  elements: BlockModel[];
}
