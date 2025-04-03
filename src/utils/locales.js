/**
 * Carga dinámicamente archivos JSON de traducción desde la carpeta `@locales`.
 * Utiliza `import.meta.glob` de Vite para importar todos los archivos `.json` de forma inmediata.
 *
 * @function
 * @returns {object} Un objeto con traducciones agrupadas por idioma.
 * Las claves son los nombres de los archivos JSON (sin la extensión) y los valores son los contenidos de cada archivo.
 *
 * @example
 * // Estructura de archivos en la carpeta @locales:
 * // @locales/en.json
 * // @locales/es.json
 *
 * const locales = loadLocales();
 * console.log(locales);
 * // Resultado esperado:
 * // {
 * //   en: { title: 'Hello', welcome: 'Welcome!' },
 * //   es: { title: 'Hola', welcome: '¡Bienvenido!' }
 * // }
 *
 * @throws {Error} Si ocurre algún problema al importar los archivos de traducción.
 */
const LoadLocales = () => {
  const locales = import.meta.glob('../locales/*.json', {
    eager: true,
    import: 'default',
  });

  return Object.entries(locales).reduce((acc, [path, translation]) => {
    const local = path.match(/\/([^/]+)(?=\.json$)/)?.[1];

    if (local) {
      acc[local] = translation;
    }

    return acc;
  }, {});
};

export default LoadLocales;