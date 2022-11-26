import { ILanguage } from '../../../Api/models/language';
import React from "react";
import { LangItemDesc, LangItemFooter, LangItemTitle, LangItemWrapper } from './style';

interface Props {
  item: ILanguage;
  isSelected: boolean;
  onSelect: (id: string) => void;
}

const LanguageItem: React.FC<Props> = (props: Props) => {
  return (
    <LangItemWrapper onClick={() => props.onSelect(props.item._id)} selected={props.isSelected}>
      <LangItemTitle>{props.item.title}</LangItemTitle>
      <LangItemDesc>
        test styles
      </LangItemDesc>
      <LangItemFooter>
        
      </LangItemFooter>
    </LangItemWrapper>
  );
}

export default React.memo(LanguageItem);