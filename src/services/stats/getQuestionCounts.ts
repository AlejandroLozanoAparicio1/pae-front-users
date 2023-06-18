import getQuestionCountsMock from '../../utils/mocks/getQuestionCountsMock.json';

const getQuestionCounts = (
  questionId: number,
): Promise<{ answer: string; timesSelected: number }[]> =>
  new Promise<any>((resolve, _reject) => {
    setTimeout(() => {
      const res: { answer: string; timesSelected: number } = getQuestionCountsMock as any;
      resolve(res);
    }, 300);
  });

export default getQuestionCounts;
