import { useLoaderData } from 'react-router-dom';
import FormPage from './FormPage/FormPage';

const FormInfoPage: React.FC = () => {
  const data: any = useLoaderData();
  return (
    <div>
      {data.map((item: any) => (
        <FormPage />
      ))}
    </div>
  );
};

export default FormInfoPage;
