import { CategoryModel } from './CategoryModel';
import { ImageModel } from './ImageModel';
import { PageModel } from './PageModel';
import { PersonModel } from './PersonModel';

export interface PostLayoutModel extends PageModel {
  readonly date: string | number | Date;
  readonly author: Maybe<PersonModel>;
  readonly category: CategoryModel;
  readonly excerpt?: string;
  readonly media: Maybe<ImageModel>;
  readonly numOfPostsPerPage: number;
}
