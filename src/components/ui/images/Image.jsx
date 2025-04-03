/**
 * Componente de imagen reutilizable.
 * @param {object} props - Propiedades del componente.
 * @param {string} props.src - URL de la imagen.
 * @param {string} props.alt - Texto alternativo para la imagen.
 * @param {string} [props.srcSet] - Conjunto de fuentes para imágenes responsivas.
 * @param {object} [props.rest] - Cualquier otra propiedad adicional que se pasará al elemento `<img>`.
 * @returns {JSX.Element} Un elemento de imagen con soporte para tamaños responsivos.
 * @example <Image src={src} alt={alt} srcSet={srcSet} />
 */
const Image = ({ src, alt, srcSet, ...rest }) => {

  return (
    <img
      src={src}
      alt={alt}
      srcSet={srcSet}
      sizes="(max-width: 480px) 480px, (max-width: 768px) 768px, (max-width: 1024px) 1024px, 1920px"
      {...rest}
    />
  );
};

export default Image;