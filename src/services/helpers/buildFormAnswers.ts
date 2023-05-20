export const buildFormAnswers = (json: any, form: QuestionType[] | null) => {
  const data: AnswerType[] = [];
  const questionArray: SimpleQuestion[] = [];
  const answerArray: string[] = [];

  Object.keys(json)
    .sort()
    .forEach((key) => {
      const ans = parseInt(json[key].toString());
      const [questionKey] = key.split('_');
      const formItem = form?.filter((item) => item.questionId === parseInt(questionKey));

      let type = formItem ? formItem[0].type : '';
      if (!type) {
        type = 'text';
      }

      const answerObj = formItem
        ? formItem[0].optionsList.filter((item) => item.optionsId === ans)
        : '';

      const optionId = answerObj ? answerObj[0].optionsId : -1;
      const optionsText = answerObj ? answerObj[0].options : '';

      const row: AnswerType = {
        options: { optionsId: optionId },
        answerId: ans,
        answer: optionsText,
        type: type,
      };

      data.push(row);
      questionArray.push({
        questionId: parseInt(questionKey),
        questionText: formItem ? formItem[0].questionText : '',
      });
      answerArray.push(optionsText);
    });

  const questionData = [...new Set(questionArray)];
  const answerData = [...new Set(answerArray)];
  return { data, questionData, answerData };
};
