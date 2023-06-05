import { useContext, useEffect, useState } from 'react';
import { AnswersContext } from '../context/AnswersContext';
import postForm from '../services/forms/postForm';
import getMostSelected from '../services/stats/getMostSelected';
import getQuestionCounts from '../services/stats/getQuestionCounts';
import getSelectedCount from '../services/stats/getSelectedCount';

export const useStats = () => {
  const { answers, questionStats, answerStats } = useContext(AnswersContext);
  const [mostSelected, setMostSelected] = useState<MostAnswered[]>([]);
  const [selectedCount, setSelectedCount] = useState<AnswerCount[]>([]);
  const [questionCounts, setQuestionCounts] = useState<QuestionCounts[]>([]);

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
      setSelectedCount(result);
    };
    f();
  }, [answerStats]);

  useEffect(() => {
    const f = async () => {
      const stats = questionStats.map((question) => getQuestionCounts(question.questionId));
      const promiseResult = await Promise.all(stats).then((values) => {
        return values;
      });
      const result = promiseResult.map((value, index) => {
        const questionText = questionStats[index].questionText;
        const answers = value.map((ans) => {
          return { title: ans.answer, strokeWidth: 90, strokeStyle: 'wide' };
        });
        const counts = value.map((ans) => {
          return { angle: ans.timesSelected };
        });
        return { question: questionText, answers, counts };
      });
      setQuestionCounts(result);
    };
    f();
  }, [questionStats]);

  return { mostSelected, selectedCount, questionCounts };
};
