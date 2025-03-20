const Image = ({ image, name, className }) => {

  console.log(image);
  return image && image.desktop && image.tablet && image.mobile ? (
    <figure className="flex flex-col items-center text-center">
      <picture>
        <source srcSet={image.desktop} media="(min-width: 1024px)" />
        <source srcSet={image.tablet} media="(min-width: 768px)" />
        <source srcSet={image.mobile} media="(max-width: 767px)" />
        <img
          src={image.desktop}
          alt={name}
          className={`rounded-lg shadow-md ${className}`}
        />
      </picture>
    </figure>
  ) : (
    <p>Image not available</p>
  );
}

export default Image;