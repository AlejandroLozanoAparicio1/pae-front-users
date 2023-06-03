type ContextChildrenType = {
  children: React.ReactNode;
};

type AnswerContextType = {
  answers: Answer[];
  questionStats: SimpleQuestion[];
  answerStats: string[];
  buildFormData: (json: { [k: string]: FormDataEntryValue }, form: QuestionType[]) => void;
};

type StatsContextType = {
  mostSelected: MostAnswered[];
  selectedCount: AnswerCount[];
  getMostSelectedStats: (questionStats: SimpleQuestion[]) => void;
  getCountStats: (answerStats: string[]) => void;
};

type LabelsContextType = {
  get: (key: string) => string;
  setLang: (value: Language) => void;
  lang: Language;
};

type LabelsContextChildrenType = {
  children: React.ReactNode;
  labels: { [k: string]: { [k: string]: string } };
  language: Language;
};
