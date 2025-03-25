import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'

const Modal = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <Dialog open={!!isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
          <DialogTitle className="font-bold">Deactivate account</DialogTitle>
            {children}
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default Modal;