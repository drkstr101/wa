import { ViewStyleProps } from '@react-types/view';
import { ContentModel } from './ContentModel';
export interface BlockModel extends ContentModel {
  readonly elementType: string | JSXElementConstructor<any>;
  readonly styles: ViewStyleProps;
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
