import '@plugins/i18n';
import { useTranslation } from 'react-i18next';
import Button from '@components/ui/buttons/Button';
import Title from '@components/ui/texts/Title';
import CardContainer from '@components/cardsContainer/CardsContainer';
import CartCardContainer from '@components/cardsContainer/CartCardContainer';
import Modal from '@components/modales/Modal';
import priceFormat from '@utils/priceFormat';
import { useCountStore } from '@hooks/useStore';
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
  const { cart, clearCart } = useCountStore();

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
          {`${t('cart.title')} (${cart.count})`}
        </Title>
        <CartCardContainer />
        <div>
          <div className='w-full flex justify-between my-5'>
            <p className='text-rose-500 font-semibold text-lg'>
              {t('cart.total')}
            </p>
            <p className='text-black text-2xl font-bold'>
              {priceFormat(cart.total)}
            </p>
          </div>
          <div className='px-4 py-2 bg-rose-50 rounded-xl flex justify-center gap-2 items-center'>
            <i className='fas fa-tree text-secondary' />
            <p className='truncate'>
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
            <div className='w-full'>
              <p className='text-3xl font-extrabold '>
                {t('confirm.success.title')}
              </p>
              <p className='text-xs '>
                {t('confirm.success.message')}
              </p>
            </div>
            <div className='bg-rose-50 p-4 rounded-xl mt-4'>
              {cart.items.map((product) => (
                <div className='flex gap-4 items-center justify-between border-b-[1px] border-rose-100 pb-4'>
                  <div className='flex gap-4 items-center'>
                    <img src={product.image.thumbnail} alt="Fotito del producto" className='size-12' />
                    <div className='flex flex-col justify-start items-start gap-2'>
                      <Title className='truncate'>
                        {product.name}
                      </Title>
                      <div className='flex justify-evenly gap-2'>
                        <p>{`${product.quantity}x`}</p>
                        <p>{priceFormat(product.price)}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p>{priceFormat(product.price * product.quantity)}</p>
                  </div>
                </div>
              ))}
              <div className='mt-5 flex justify-between'>
                <Title>
                  {t('confirm.success.totalOrder')}:
                </Title>
                <p>{priceFormat(cart.total)}</p>
              </div>
            </div>
            <div>
              <Button
                onClick={() => {
                  setModal();
                  clearCart();
                }}
                className='w-full bg-primary text-white h-8 rounded-2xl'
              >
                {t('confirm.success.newOrder')}
              </Button>
            </div>
          </Modal>
        </div>
      </aside>
    </div>
  )
}

export default App
