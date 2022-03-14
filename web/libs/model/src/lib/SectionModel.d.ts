import { ContentModel } from './ContentModel';
import { Maybe } from './Maybe';

export interface SectionModel extends ContentModel {
  readonly title: string;
  readonly subtitle?: string;
  readonly elements: Maybe<ContentModel[]>;
}
