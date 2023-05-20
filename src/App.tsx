import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styles from './app.module.scss';
import Header from './components/Header/Header';
import QAProvider from './context/StatsContext';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import FormPage from './pages/FormInfoPage/FormPage/FormPage';
import InfoPage from './pages/InfoPage/InfoPage';
import StatsPage from './pages/StatsPage/StatsPage';
import fetchForm from './services/forms/getForm';

const loader = async ({ params }: any): Promise<FormLoader> => {
  const data: QuestionType[][] = await fetchForm(params.questionaryName);
  const hasMorePages = data.length - 1 > params.pageId;
  return {
    form: data[params.pageId],
    hasMorePages,
    page: parseInt(params.pageId),
    questionaryName: params.questionaryName,
  };
};

const router = createBrowserRouter([
  {
    path: 'forms/:questionaryName/:pageId',
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
