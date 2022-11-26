import React from 'react';
import { AuthContextType, useAuthContext } from './uaeAuthContext';


export interface SelectAuthType {
  general: AuthContextType | null;
}

export const SelectAuthContext = React.createContext<SelectAuthType>({
  general: null,
});

export const useGeneralDataContext = () => React.useContext(SelectAuthContext);

export const useGeneralActions = (): SelectAuthType => {
  const generalData = useAuthContext();
  return {
    general: generalData,
  };
};

export const AuthProvider: React.FC<any> = props => {
  const _actions: SelectAuthType = useGeneralActions();
  return <SelectAuthContext.Provider value={_actions}>{props.children}</SelectAuthContext.Provider>;
};