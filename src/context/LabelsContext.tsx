import { ReactElement, createContext, useState } from 'react';

export const LabelsContext = createContext<LabelsContextType>({
  get: (key: string) => '',
  setLang: (value: string) => {},
});

const LabelsProvider: React.FC<LabelsContextChildrenType> = ({
  children,
  labels,
  language,
}): ReactElement => {
  const [lang, setLang] = useState<Language>(language);

  const get = (key: string): string => {
    return labels[key][lang];
  };

  return (
    <LabelsContext.Provider value={{ get: get, setLang: setLang }}>
      {children}
    </LabelsContext.Provider>
  );
};

export default LabelsProvider;
