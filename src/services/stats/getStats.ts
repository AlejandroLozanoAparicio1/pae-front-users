import getMostSelected from './getMostSelected';
import getSelectedCount from './getSelectedCount';

const getMostSelectedStats = async (questionData: SimpleQuestion[]) => {
  const stats = questionData.map((question) => getMostSelected(question.questionId));
  return await Promise.all(stats).then((values) => {
    return values;
  });
};

const getCountStats = async (answerData: string[]) => {
  const stats = answerData.map((answer) => getSelectedCount(answer));
  return await Promise.all(stats).then((values) => {
    return values;
  });
};

const statFunctions = { getMostSelectedStats, getCountStats };

export default statFunctions;
