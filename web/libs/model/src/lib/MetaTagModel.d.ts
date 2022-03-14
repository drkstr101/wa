import { Model } from './Model';

export interface MetaTagModel extends Model {
  readonly property: string;
  readonly content: string;
  readonly format?: string;
}
