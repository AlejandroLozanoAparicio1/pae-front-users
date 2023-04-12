import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styles from './app.module.scss';
import Header from './components/Header/Header';
import QAProvider from './context/StatsContext';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import FormPage from './pages/FormInfoPage/FormPage/FormPage';
import InfoPage from './pages/InfoPage/InfoPage';
import StatsPage from './pages/StatsPage/StatsPage';
import fetchForm from './services/getForm';

const loader = async ({ params }: any) => {
  const data: [] = await fetchForm();
  const hasMorePages = data.length - 1 > params.pageId;
  return { initData: data[params.pageId], hasMorePages, page: parseInt(params.pageId) };
};

const router = createBrowserRouter([
  {
    path: 'form/:pageId',
    element: <FormPage />,
    errorElement: <ErrorPage />,
    loader: loader,
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
    <div className={styles.app}>
      <Header />
      <div className={styles._page_container}>
        <QAProvider>
          <RouterProvider router={router} />
        </QAProvider>
      </div>
    </div>
  );
};

export default App;
