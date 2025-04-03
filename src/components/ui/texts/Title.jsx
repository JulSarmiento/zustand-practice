/**
 * Componente de título que renderiza un elemento <h1> con estilos personalizados.
 *
 * @param {object} props - Propiedades del componente.
 * @param {import("react").ReactNode} props.children - Contenido a ser renderizado dentro del título.
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'} props.as - Etiqueta de encabezado.
 * @param {string} [props.className] - Clases CSS adicionales para personalizar el estilo del título.
 * @returns {import("react").JSX.Element} - El elemento Title.
 *
 * @example
 * // Uso básico del componente Title
 * <Title>Mi Título</Title>
 *
 * @example
 * // Uso del componente Title con clases CSS adicionales
 * <Title className="text-red-500">Mi Título en Rojo</Title>
 */
export default function Title({ children, as: Tag = 'h1', className = '' }) {
  const DynamicTag = Tag;
  return (
    <DynamicTag className={`font-RH ${className}`}>
      {children}
    </DynamicTag>
  );
}