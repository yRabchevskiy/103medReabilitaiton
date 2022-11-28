import React, { createContext, useMemo } from 'react';
import { IUser } from '../../Api/models/admin_models';

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
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>
}
const AuthContext = createContext({} as IAuthContext);

const AuthProvider = (props: any) => {
  const [user, setUser] = React.useState<IUser | null>(null);


  const value = useMemo(
    () => ({ user, setUser, }), [user])


  return (
    <AuthContext.Provider
      value={value as any}
    >
      {props.children}
    </AuthContext.Provider>
  );
}
export { AuthContext, AuthProvider };
