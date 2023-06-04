import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import styles from './app.module.scss';
import Header from './components/Header/Header';
import AnswersProvider from './context/AnswersContext';
import i18n from './context/i18n.json';
import LabelsProvider from './context/LabelsContext';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import FormInfoPage from './pages/FormInfoPage/FormInfoPage';
import StatsPage from './pages/StatsPage/StatsPage';
import fetchForm from './services/forms/getForm';

const formLoader = async ({ params }: any): Promise<FormLoader> => {
  const data: (QuestionType | Information)[][] = await fetchForm(params.questionaryName);
  const hasMorePages = data.length - 1 > params.pageId;
  return {
    form: data[params.pageId] as QuestionType[],
    hasMorePages,
    page: parseInt(params.pageId),
    questionaryName: params.questionaryName,
  };
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'forms/:questionaryName/:pageId',
        element: <FormInfoPage />,
        loader: formLoader,
      },
      {
        path: 'stats',
        element: <StatsPage />,
      },
    ],
  },
]);

const App: React.FC = () => {
  return (
    <LabelsProvider labels={i18n} language={'en'}>
      <AnswersProvider>
        <div className={styles.app}>
          <div className={styles._page_container}>
            <RouterProvider router={router} />
          </div>
        </div>
      </AnswersProvider>
    </LabelsProvider>
  );
};

export default App;
