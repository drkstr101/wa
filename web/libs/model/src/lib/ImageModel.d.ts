import { Maybe } from './Maybe';
import { Model } from './Model';

export interface ImageModel extends Model {
  readonly id: string;
  readonly filename: string;
  readonly blurUpThumb: string;
  readonly width: number;
  readonly height: number;
  readonly alt: Maybe<string>;
  readonly url: string;
}
