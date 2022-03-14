import { MetaTagModel } from './MetaTagModel';
import { Model } from './Model';

export interface SeoModel extends Model {
  readonly metaTitle?: string;
  readonly metaDescription?: string;
  readonly addTitleSuffix?: boolean;
  readonly socialImage?: string;
  readonly metaTags: MetaTagModel[];
}
