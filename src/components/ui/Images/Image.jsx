const Image = ({ name, srcSet, src, className }) => {

  const srcSetString = srcSet
    .map((image) => `${image.image} ${image.media}`)
    .join(', ');

  return (
    <figure className="flex flex-col items-center text-center">
      <img
        src={src}
        srcSet={srcSetString}
        alt={name}
        className={`rounded-lg shadow-md ${className}`}
      />
    </figure>
  );
  
}

export default Image;