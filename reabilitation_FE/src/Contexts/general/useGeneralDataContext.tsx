import * as React from 'react';
import { GeneralContextType, useGeneralContext } from './useGeneralContext';

export interface SelectGeneralType {
  general: GeneralContextType | null;
}

export const SelectGeneralContext = React.createContext<SelectGeneralType>({
  general: null,
});

export const useGeneralDataContext = () => React.useContext(SelectGeneralContext);

export const useGeneralActions = (): SelectGeneralType => {
  const generalData = useGeneralContext();
  return {
    general: generalData,
  };
};

export const GeneralProvider: React.FC<any> = props => {
  const _actions: SelectGeneralType = useGeneralActions();
  return <SelectGeneralContext.Provider value={_actions}>{props.children}</SelectGeneralContext.Provider>;
};
