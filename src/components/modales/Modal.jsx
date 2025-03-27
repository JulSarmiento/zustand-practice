import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

/**
 * Componente Modal.
 * Este componente representa un modal que se muestra condicionalmente 
 * basado en la propiedad `isOpen`. Si `isOpen` es `false`, el modal no se renderiza.
 * @param {Object} props - Las propiedades del componente.
 * @param {React.ReactNode} props.children - El contenido que se mostrará dentro del modal.
 * @param {boolean} props.isOpen - Indica si el modal está abierto (`true`) o cerrado (`false`).
 * @param {function} props.onClose - Función que se ejecuta cuando se cierra el modal.
 * @returns {React.ReactElement|null} El modal si `isOpen` es `true`, de lo contrario `null`.
 * @example <Modal isOpen={isOpen} onClose={onClose}>
 */
const Modal = ({ children, isOpen, onClose }) => {

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center md:p-4">
        <DialogPanel className="max-w-md w-full space-y-2 shadow-lg rounded-xl bg-white p-6">
          <DialogTitle className="font-bold">
            <i className='fas fa-check-circle text-secondary text-2xl' onClick={() => onClose()}/>
          </DialogTitle>
            {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default Modal;