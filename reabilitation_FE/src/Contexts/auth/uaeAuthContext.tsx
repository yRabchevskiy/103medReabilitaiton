import React from 'react';

export interface AuthContextType {
  user: any;
  onSignIn: (_user: any, callback: () => void) => void;
  onSignOut: (callback: () => void ) => void;
}
export function useAuthContext(): AuthContextType {
  const [user, setUser] = React.useState(null);   

  const onSignIn = (newUser: any, callback: () => void) => {
    setUser(newUser);
    callback();
  };

  const onSignOut = (callback: () => void) => {
    setUser(null);
    callback();
  };

  return {
    user,
    onSignIn,
    onSignOut,
  };
}
