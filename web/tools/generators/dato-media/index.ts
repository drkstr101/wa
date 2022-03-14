import { Tree, writeJsonFile } from '@nrwl/devkit';
import media from './media.json';

interface ImageAsset {
  id: string;
  filename: string;
  blurUpThumb: string;
  width: number;
  height: number;
  alt: string | null;
  url: string;
}

interface Schema {
  token: string;
}

export default async function (tree: Tree, { token }: Schema) {
  media.assets.forEach((image) => {
    writeJsonFile(`content/data/media/${image.filename}.json`, image);
  });

  return () => {
    // installPackagesTask(tree);
  };
}
