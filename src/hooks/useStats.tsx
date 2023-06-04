import { useContext, useEffect, useState } from 'react';
import { AnswersContext } from '../context/AnswersContext';
import postForm from '../services/forms/postForm';
import getMostSelected from '../services/stats/getMostSelected';
import getQuestionCounts from '../services/stats/getQuestionCounts';
import getSelectedCount from '../services/stats/getSelectedCount';

export const useStats = () => {
  const { answers, questionStats, answerStats, questIdStats } = useContext(AnswersContext);
  const [mostSelected, setMostSelected] = useState<MostAnswered[]>([]);
  const [selectedCount, setSelectedCount] = useState<AnswerCount[]>([]);
  const [questionCounts, setQuestionCounts] = useState<{ angle: number }[][]>([]);

  /* maybe all these use effects dont have to be use effects?? (at least the post one shouldn't really be one (i think)) */
  useEffect(() => {
    if (answers.length > 0) {
      postForm(answers);
    }
  }, [answers]);

  useEffect(() => {
    const f = async () => {
      const stats = questionStats.map((question) => getMostSelected(question.questionId));
      const promiseResult = await Promise.all(stats).then((values) => {
        return values.map((value: any, index: number) => {
          return { question: questionStats[index].questionText, answer: value.options };
        });
      });
      const result = promiseResult.map((value: any, index: number) => {
        return { question: questionStats[index].questionText, answer: value.options };
      });
      console.log('setMostSelected', result);
      setMostSelected(result);
    };
    f();
  }, [questionStats]);

  useEffect(() => {
    const f = async () => {
      const stats = answerStats.map((answer) => getSelectedCount(answer));
      const promiseResult = await Promise.all(stats).then((values) => {
        return values;
      });
      const result: AnswerCount[] = promiseResult.map((value: any, index: number) => {
        return { answer: answerStats[index], count: value };
      });
      console.log('setSelectedCount', result);
      setSelectedCount(result);
    };
    f();
  }, [answerStats]);

  useEffect(() => {
    const f = async () => {
      const stats = questIdStats.map((questionId) => getQuestionCounts(questionId));
      const promiseResult = await Promise.all(stats).then((values) => {
        return values;
      });
      //const result: QuestionCounts[] = promiseResult.map((value: any, index: number) => {
      const result = promiseResult.map((value) => {
        return value.map((ans) => {
          return { angle: ans.timesSelected };
        });
      });
      console.log('setQuestionCounts', result);
      setQuestionCounts(result);
    };
    f();
  }, [questIdStats]);

  return { mostSelected, selectedCount, questionCounts };
};
