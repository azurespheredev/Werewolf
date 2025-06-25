import { Bounce, ToastContainer } from 'react-toastify';
import StoreProvider from './contexts/StoreProvider';
import AppRouter from './routes/AppRouter';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <StoreProvider>
      <AppRouter />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </StoreProvider>
  );
}
