import React from 'react';
// import { FormattedMessage } from 'react-intl';
import GlobalStyle from './global-style';
import AppRoutes from './Routes';
// import messages from './Providers/messages/messages';

const App: React.FC<{}> = () => {
  return (
    <>
      <AppRoutes />
      <GlobalStyle />
    </>
    // <div><FormattedMessage {...messages.hello} /></div>
  );
}

export default App;
