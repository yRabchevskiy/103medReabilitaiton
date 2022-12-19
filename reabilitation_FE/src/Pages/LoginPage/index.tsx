import React, { useContext } from 'react';
import { FormWrapper, ImageBG, LoginFlexWrapper } from './style';
import bg from '../../images/bg.jpg';
import TextInput from '../../Components/Inputs/TextInput';
import PasswordInput from '../../Components/Inputs/PasswordInput';
import PrimaryButton from '../../Components/Buttons/PrimaryButton';
import { jsonClone } from '../../Utils/common';
import { useNavigate } from 'react-router-dom';
import { usePost } from '../../Api/service';
import { IUser } from '../../Api/models/admin_models';
import { AuthContext } from '../../Contexts/auth/uaeAuthContext';

interface Props { }

type LoginFormType = 'login' | 'password';
interface LoginForm {
  login: string;
  password: string;
}
const LoginPage: React.FC<Props> = (props: Props) => {
  const [loginData, setLoginData] = React.useState<LoginForm>({ login: '', password: '' });
  const { loading, response, error, onPost } = usePost<LoginForm, IUser>();
  const { user, onLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const loginRef = React.useRef<HTMLInputElement>(null);
  const passRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (response) {
      onLogin(response);
    }
  }, [response]);

  React.useEffect(() => {
    if (user) {
      navigate('/admin');
    }
  }, [user]);
  
  const onTryLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loginRef.current?.value && passRef.current?.value) {  
      tryLogin({ login: loginRef.current?.value, password: passRef.current?.value })
      return;
    }
    if (!loginData.login || !loginData.password) return;
    setLoginData({ login: '', password: '' });
    tryLogin({ login: loginData.login, password: loginData.password });
  };

  const onChangeField = (v: string, key: LoginFormType) => {
    const _obj: LoginForm = jsonClone(loginData);
    _obj[key] = v;
    setLoginData(_obj);
  };

  const tryLogin = (data: LoginForm) => {
    onPost('/login', data);
  };

  return (
    <LoginFlexWrapper>
      <ImageBG src={bg} />
      <FormWrapper onSubmit={onTryLogin} autoComplete="new-password">
        <TextInput
          ref={loginRef}
          style={{ height: '64px', marginBottom: '20px', padding: '8px 16px', fontSize: '24px' }}
          name="login"
          value={loginData.login}
          onChange={(v: string) => onChangeField(v, 'login')}
        />
        <PasswordInput
          ref={passRef}
          style={{ height: '64px', marginBottom: '20px', padding: '8px 40px 8px 16px', fontSize: '24px' }}
          eyeIconStyles={{ width: '32px', height: '32px', top: 'calc(50% - 24px)' }}
          name="password"
          value={loginData.password}
          onChange={(v: string) => onChangeField(v, 'password')}
        />
        <PrimaryButton
          style={{ height: '64px', maxWidth: '100%', fontSize: '24px' }}
          type="submit"
          label="Login" />
      </FormWrapper>
    </LoginFlexWrapper>
  )
}

export default React.memo(LoginPage);
