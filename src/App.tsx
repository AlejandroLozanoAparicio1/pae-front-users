import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styles from './app.module.scss';
import Header from './components/Header/Header';
import AnswersProvider from './context/AnswersContext';
import i18n from './context/i18n.json';
import LabelsProvider from './context/LabelsContext';
import StatsProvider from './context/StatsContext';
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
    <LabelsProvider labels={i18n} language={'cat'}>
      <div className={styles.app}>
        <Header />
        <div className={styles._page_container}>
          <AnswersProvider>
            <StatsProvider>
              <RouterProvider router={router} />
            </StatsProvider>
          </AnswersProvider>
        </div>
      </div>
    </LabelsProvider>
  );
};

export default App;
