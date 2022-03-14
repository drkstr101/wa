import { Maybe } from './Maybe';
import { Model } from './Model';

export interface PersonModel extends Model {
  readonly firstName: string;
  readonly lastName?: string;
  readonly role?: string;
  readonly bio?: string;
  readonly avatar: Maybe<ImageModel>;
}
