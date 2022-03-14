import { Maybe } from './Maybe';
import { Model } from './Model';
import { SectionModel } from './SectionModel';
import { SeoModel } from './SeoModel';

export interface PageModel extends Model {
  readonly seo: Maybe<SeoModel>;
  readonly title: string;
  readonly subtitle?: string;
  readonly content?: string;
  readonly sections?: SectionModel[];
}
