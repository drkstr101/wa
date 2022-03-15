import { Model } from './Model';

export interface ContentModel extends Model {
  readonly elementId: string;
  readonly slot:
    | 'main'
    | 'title'
    | 'content'
    | 'text'
    | 'subtitle'
    | 'media'
    | 'actions'
    | 'cta'
    | 'form'
    | 'items';
}
