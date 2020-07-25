import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const addSuccess = name =>
  toast.success(`Success, ${name} add to contacts!`, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const emptyForm = () =>
  toast.error('Please fill out the form!', {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
export const isExistContact = name =>
  toast.info(`${name} is already in contacts`, {
    position: 'top-center',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
