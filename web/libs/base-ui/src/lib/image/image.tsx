import NextImage, { ImageProps as NextImageProps } from 'next/image';

/* eslint-disable-next-line */
export interface ImageProps extends NextImageProps {}

export const Image = ({ className, ...props }: ImageProps) => (
  <div className={className}>
    <NextImage {...props} />
  </div>
);

export default Image;
