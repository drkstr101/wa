import { Model } from './Model';

export interface ContentModel extends Model {
  readonly elementId: string;
  readonly slot:
    | 'main'
    | 'title'
    | 'content'
    | 'subtitle'
    | 'media'
    | 'actions'
    | 'cta'
    | 'form'
    | 'items';
}
