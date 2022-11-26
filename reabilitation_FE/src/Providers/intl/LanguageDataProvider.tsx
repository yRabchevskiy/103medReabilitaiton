import React from 'react';
import { LanguageContextType, useLanguageDataContext } from './useLanguageContext';

export interface SelectLanguageDataType {
  language: LanguageContextType;
}

export const SelectLanguageDataContext = React.createContext<SelectLanguageDataType>({} as SelectLanguageDataType);

export const useLanguageContext = () => React.useContext(SelectLanguageDataContext);

export const useLanguageActions = (): SelectLanguageDataType => {
  const _language = useLanguageDataContext();
  return {
    language: _language,
  };
};


interface Props {
  actions: SelectLanguageDataType;
  children?: React.ReactNode;
}
export const LanguageDataProvider: React.FC<Props> = (props: Props) => {
  return (
    <SelectLanguageDataContext.Provider value={props.actions}>
      {props.children}
    </SelectLanguageDataContext.Provider>
  );
};