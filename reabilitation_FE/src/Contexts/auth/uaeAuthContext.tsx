import React, { createContext, useMemo } from 'react';
import { IUser } from '../../Api/models/admin_models';
import { fromBase64, getToBase64, toBase64 } from '../../Api/utils/common';
import { ReabilitationKeys } from '../../Utils/local_storage';

// export interface AuthDataContextType {
//   user: IUser | null;
//   onSignIn: (_user: IUser) => void;
//   onSignOut: () => void;
// }

// function useAuthContext(): AuthDataContextType {
//   const [user, setUser] = React.useState<IUser | null>(null);

//   const onSignIn = (newUser: IUser) => {
//     setUser(newUser);
//   };

//   const onSignOut = () => {
//     setUser(null);
//   };

//   return {
//     user,
//     onSignIn,
//     onSignOut,
//   };
// }

// export default useAuthContext;

interface IAuthContext {
  user: IUser | null;
  onLogin: (data: IUser | null) => void;
  onLogout: () => void;
}
const AuthContext = createContext({} as IAuthContext);

const AuthProvider = (props: any) => {
  const [user, setUser] = React.useState<IUser | null>(null);

  React.useEffect(() => {
    const _obj = localStorage.getItem(ReabilitationKeys.USER);
    if (_obj) {
      const _user: IUser = JSON.parse(fromBase64(_obj));
      setUser(_user);
    }
  }, []);

  const onLogin = (data: IUser | null) => {
    if (data) {
      localStorage.setItem(ReabilitationKeys.USER, toBase64(JSON.stringify(data)));
    }   
    setUser(data);
  };

  const onLogout = () => {
    localStorage.removeItem(ReabilitationKeys.USER);
    setUser(null);
  };

  const value = useMemo(
    () => ({ user, onLogin, onLogout }), [user])


  return (
    <AuthContext.Provider
      value={value as any}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export { AuthContext, AuthProvider };
