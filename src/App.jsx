import '@plugins/i18n';
import { useTranslation } from 'react-i18next';
import Title from '@components/ui/texts/Title';
import CardContainer from '@components/cardsContainer/CardsContainer';
import CartCardContainer from '@components/cardsContainer/CartCardContainer';
import Modal from '@components/modales/Modal';
import priceFormart from '@utils/priceFormat';
import { useState } from 'react';

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
  const [isOpen, setIsOpen] = useState(false);

  const count = 1

  const setModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`min-h-screen font-RH flex flex-col justify-between p-4 md:p-10 lg:flex-row bg-rose-50 ${isOpen ? 'blur-xs' : ''}`}>
      <main className='w-full'>
        <Title
          as="h1"
          className="text-3xl text-rose-900 mb-10 font-semibold place-self-start"
        >
          {t('home.title')}
        </Title>
        <CardContainer />
      </main>
      <aside className='w-full bg-white h-[50%] rounded-xl p-4 md:mt-4 lg:mt-0 lg:w-[60%] xl:w-[50%]'>
        <Title
          as="h2"
          className="text-2xl mb-6 text-primary font-bold place-self-start"
        >
          {`${t('cart.title')} (${count})`}
        </Title>
        <CartCardContainer />
        <div>
          <div className='w-full flex justify-between my-5'>
            <p className='text-rose-500 font-semibold text-lg'>
              {t('cart.total')}
            </p>
            <p className='text-black text-2xl font-bold'>
              {priceFormart(100)}
            </p>
          </div>
          <div className='px-4 py-2 bg-rose-50 rounded-xl flex justify-center gap-2 items-center'>
            <i className='fas fa-tree text-secondary' />
            <p>
              {t('cart.note')}
            </p>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className='w-full bg-primary rounded-4xl text-white py-4 mt-5 font-semibold'>
            {t('cart.checkout')}
          </button>
          <Modal
            isOpen={isOpen}
            onClose={setModal}
          >
            <div>
              <p className='text-3xl font-extrabold '>
                {t('confirm.success.title')}
              </p>
              <p className='text-xs'>
                {t('confirm.success.message')}
              </p>
            </div>

            <div>
              <div>
                <img src="" alt="" />
              </div>
            </div>
          </Modal>
        </div>
      </aside>
    </div>
  )
}

export default App
