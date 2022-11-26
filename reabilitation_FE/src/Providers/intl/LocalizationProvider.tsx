import React from 'react';
import { IntlProvider } from 'react-intl';
import { LanguageDataProvider, useLanguageActions } from './LanguageDataProvider';

export interface Props {
  messages: { [locale: string]: { [id: string]: string } };
  children?: React.ReactNode;
}

export default function LanguageProvider(props: Props) {
  const languageActions = useLanguageActions();
  return (
    <LanguageDataProvider actions={languageActions}>
      <IntlProvider
        locale={languageActions.language.selectedLanguage.key}
        // key={language} comment and it fix reload page
        messages={props.messages[languageActions.language.selectedLanguage.key]}
      >
        {React.Children.only(props.children)}
      </IntlProvider>
    </LanguageDataProvider>
  );
}