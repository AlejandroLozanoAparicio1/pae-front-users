import { createContext, useState } from 'react';
import getMostSelected from '../services/stats/getMostSelected';
import getQuestionCounts from '../services/stats/getQuestionCounts';
import getSelectedCount from '../services/stats/getSelectedCount';

const init = {
  mostSelected: [],
  selectedCount: [],
  questionCounts: [],
  getMostSelectedStats: (questionStats: SimpleQuestion[]) => {},
  getCountStats: (answerStats: string[]) => {},
  getAllCountStats: (questionStats: number[]) => {},
};

export const StatsContext = createContext<StatsContextType>(init);

const StatsProvider: React.FC<ContextChildrenType> = ({ children }: any) => {
  const [mostSelected, setMostSelected] = useState<MostAnswered[]>([]);
  const [selectedCount, setSelectedCount] = useState<AnswerCount[]>([]);
  const [questionCounts, setQuestionCounts] = useState<{ angle: number }[][]>([]);

  const getMostSelectedStats = async (questionStats: SimpleQuestion[]) => {
    const stats = questionStats.map((question) => getMostSelected(question.questionId));
    const promiseResult = await Promise.all(stats).then((values) => {
      return values;
    });
    const aux = promiseResult.map((value: any, index: number) => {
      return { question: questionStats[index].questionText, answer: value.options };
    });
    setMostSelected(aux);
  };

  const getCountStats = async (answerStats: string[]) => {
    const stats = answerStats.map((answer) => getSelectedCount(answer));
    const promiseResult = await Promise.all(stats).then((values) => {
      return values;
    });
    const aux: AnswerCount[] = promiseResult.map((value: any, index: number) => {
      return { answer: answerStats[index], count: value };
    });
    setSelectedCount(aux);
  };

  const getAllCountStats = async (questionStats: number[]) => {
    const stats = questionStats.map((questionId) => getQuestionCounts(questionId));
    const promiseResult = await Promise.all(stats).then((values) => {
      return values;
    });
    //const aux: QuestionCounts[] = promiseResult.map((value: any, index: number) => {
    const aux = promiseResult.map((value, index: number) => {
      return value.map((ans) => {
        return { angle: ans.timesSelected };
      });
    });
    setQuestionCounts(aux);
  };

  return (
    <StatsContext.Provider
      value={{
        mostSelected: mostSelected,
        selectedCount: selectedCount,
        questionCounts: questionCounts,
        getMostSelectedStats: getMostSelectedStats,
        getCountStats: getCountStats,
        getAllCountStats: getAllCountStats,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
};

export default StatsProvider;
