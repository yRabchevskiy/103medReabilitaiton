import React from 'react';
import { AuthProvider } from './Contexts/auth/useAuthDataContext';
import { GeneralProvider } from './Contexts/general/useGeneralDataContext';
// import { FormattedMessage } from 'react-intl';
import GlobalStyle from './global-style';
import AppRoutes from './Routes';
// import messages from './Providers/messages/messages';

const App: React.FC<{}> = () => {
  return (
    <>
      <GeneralProvider>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </GeneralProvider>
      <GlobalStyle />
    </>
    // <div><FormattedMessage {...messages.hello} /></div>
  );
}

export default App;
