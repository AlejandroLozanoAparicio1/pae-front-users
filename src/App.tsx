import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styles from './app.module.scss';
import Header from './components/Header/Header';
import AnswersProvider from './context/AnswersContext';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import FormPage from './pages/FormPage/FormPage';
import InfoPage from './pages/InfoPage/InfoPage';
import StatsPage from './pages/StatsPage/StatsPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <FormPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/stats',
    element: <StatsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/info',
    element: <InfoPage />,
    errorElement: <ErrorPage />,
  },
]);

const App: React.FC = () => {
  return (
    <AnswersProvider>
      <div className='app'>
        <Header />
        <div className={styles._form_container}>
          <RouterProvider router={router} />
        </div>
      </div>
    </AnswersProvider>
  );
};

export default App;
