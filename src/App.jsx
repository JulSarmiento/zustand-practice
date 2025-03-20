import './plugins/i18n';
import Title from './components/ui/Texts/Title';
import { useTranslation } from 'react-i18next';
import CardContainer from './components/cardsContainer/CardContainer';

function App() {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col justify-between p-4 md:p-10'>
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
