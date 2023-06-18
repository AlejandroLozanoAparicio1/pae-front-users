import getFormMock from '../../utils/mocks/getFormMock.json';

const fetchForm = (questionaryName: string): Promise<QuestionResponse[][]> =>
  new Promise<QuestionResponse[][]>((resolve, _reject) => {
    setTimeout(() => {
      const res: QuestionResponse[][] = getFormMock as any;
      resolve(res);
    }, 300);
  });

export default fetchForm;
