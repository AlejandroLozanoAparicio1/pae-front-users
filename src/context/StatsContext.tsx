import { createContext, useState } from 'react';

interface StatsContextType {
  mostSelected: QAType[];
  setMostSelected: (SetStateAction: any) => void;
  selectedCount: AnswerCountType[];
  setSelectedCount: (SetStateAction: any) => void;
}

interface ContextChildrenType {
  children: React.ReactNode;
}

const init = {
  mostSelected: [],
  setMostSelected: () => {},
  selectedCount: [],
  setSelectedCount: () => {},
};

export const StatsContext = createContext<StatsContextType>(init);

const QAProvider: React.FC<ContextChildrenType> = ({ children }: any) => {
  const [mostSelected, setMostSelected] = useState<QAType[]>([]);
  const [selectedCount, setSelectedCount] = useState<AnswerCountType[]>([]);

  // make function to add stats

  return (
    <StatsContext.Provider
      value={{
        mostSelected: mostSelected,
        setMostSelected: setMostSelected,
        selectedCount: selectedCount,
        setSelectedCount: setSelectedCount,
      }}
    >
      {children}
    </StatsContext.Provider>
  );
};

export default QAProvider;
