import { Model } from './Model';

export interface CategoryModel extends Model {
  readonly title: string;
  readonly slug: string;
}
