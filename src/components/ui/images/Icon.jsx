/**
 * Componente Icon que renderiza un ícono utilizando clases de Font Awesome.
 * @param {import("react").ImgHTMLAttributes<HTMLImageElement>} props - Propiedades del componente.
 * @param {string} props.name - Nombre del ícono (clase de Font Awesome) que se desea mostrar.
 * @param {string} [props.className] - Clases adicionales para personalizar el estilo del ícono.
 * @param {string|number} [props.height] - Altura del ícono (opcional).
 * @param {string|number} [props.width] - Ancho del ícono (opcional).
 * @returns {JSX.Element} Elemento JSX que representa el ícono.
 * @example <Icon name="fa-home" className="text-red-500" height={24} width={24} />
 */
const Icon = ({ name, className, height, width }) => {
  return (
    <i
      className={`fas ${name} ${className}`}
      alt={name}
      width={width}
      height={height}
    />
  );
};

export default Icon;