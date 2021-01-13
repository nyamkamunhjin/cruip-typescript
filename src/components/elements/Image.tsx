import React, { useEffect, useState } from 'react';
interface Props {
  className: string;
  src: string;
  width: number;
  height: number;
  alt: string;
}

// type ImageState = {
//   isLoaded: boolean;
// };

const Image: React.FC<Props> = ({
  className,
  src,
  width,
  height,
  alt,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const image = React.createRef<any>();

  useEffect(() => {
    const placeholderImage = document.createElement('img');
    handlePlaceholder(image.current, placeholderImage);
    return () => {};
  }, []);

  // componentDidMount() {
  //   const placeholderImage = document.createElement('img');
  //   this.handlePlaceholder(this.image.current, placeholderImage);
  // }
  const placeholderSrc = (w: string, h: string) => {
    return `data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}"%3E%3C/svg%3E`;
  };

  const handlePlaceholder = (img: HTMLImageElement, placeholder: any) => {
    img.style.display = 'none';
    img.before(placeholder);
    placeholder.src = placeholderSrc(
      img.getAttribute('width') || '0',
      img.getAttribute('height') || '0'
    );
    placeholder.width = img.getAttribute('width');
    placeholder.height = img.getAttribute('height');
    placeholder.style.opacity = '0';
    img.className && placeholder.classList.add(img.className);
    img.addEventListener('load', () => {
      placeholder.remove();
      img.style.display = '';
      setIsLoaded(true);
    });
  };

  // const { className, src, width, height, alt, ...props } = this.props;
  return (
    <img
      {...props}
      ref={image}
      className={className}
      src={src}
      width={width}
      height={height}
      alt={alt}
    />
  );
};
// Image.defaultProps = defaultProps;
export default Image;
