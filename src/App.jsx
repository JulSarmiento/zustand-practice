import '@plugins/i18n';
import { useTranslation } from 'react-i18next';
import Title from '@components/ui/texts/Title';
import CardContainer from '@components/cardsContainer/CardsContainer';

/**
 * Componente principal de la aplicación.
 * Este componente organiza la estructura principal de la interfaz dividiéndola en 
 * un área principal (`main`) y una barra lateral (`aside`). Utiliza traducciones 
 * para los títulos de las secciones mediante el hook `useTranslation`.
 * @function
 * @returns {JSX.Element} La estructura principal de la aplicación.
 * @example <App />
 */
function App() {
  const { t } = useTranslation();

  return (
    <div className='min-h-screen flex flex-col justify-between p-4 md:p-10 lg:flex-row bg-rose-50'>
      <main >
        <Title
          as="h1"
          className="text-3xl text-rose-900 font-semibold place-self-start"
        >
          {t('home.title')}
        </Title>
        <CardContainer />
      </main>
      <aside>
        <Title
          as="h2"
          className="text-2xl text-rose-900 font-semibold place-self-start"
        >
          {t('cart.title')}
        </Title>
      </aside>
    </div>
  )
}

export default App
