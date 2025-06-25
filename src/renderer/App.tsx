import { Bounce, ToastContainer } from 'react-toastify';
import { MemoryRouter as Router } from 'react-router-dom';
import StoreProvider from './contexts/StoreProvider';
import AppRouter from './routes/AppRouter';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <StoreProvider>
      <Router>
        <AppRouter />
      </Router>

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
