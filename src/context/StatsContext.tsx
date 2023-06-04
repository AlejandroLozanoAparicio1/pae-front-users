import { createContext, useState } from 'react';
import getMostSelected from '../services/stats/getMostSelected';
import getSelectedCount from '../services/stats/getSelectedCount';

const init = {
  mostSelected: [],
  selectedCount: [],
  getMostSelectedStats: (questionStats: SimpleQuestion[]) => {},
  getCountStats: (answerStats: string[]) => {},
  getAllCountStats: (answerStats: number[]) => {},
};

export const StatsContext = createContext<StatsContextType>(init);

const StatsProvider: React.FC<ContextChildrenType> = ({ children }: any) => {
  const [mostSelected, setMostSelected] = useState<MostAnswered[]>([]);
  const [selectedCount, setSelectedCount] = useState<AnswerCount[]>([]);

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

  const getAllCountStats = async (answerStats: number[]) => {
    const stats = answerStats.map((answer) => fetch_que_et_creis(answer));
    const promiseResult = await Promise.all(stats).then((values) => {
      return values;
    });
    const aux: tipus_que_et_creis[] = promiseResult.map((value: any, index: number) => {
      return { objecte_que_vols };
    });
    setSelectedCount(aux);
  };

  return (
    <StatsContext.Provider
      value={{
        mostSelected: mostSelected,
        selectedCount: selectedCount,
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
