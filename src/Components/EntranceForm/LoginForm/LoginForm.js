import { useState } from 'react';
import { ButtonAcceptForm } from '../ButtonAcceptForm/ButtonAcceptForm';
import { FieldForInput } from '../FieldForInput/FieldForInput';
import { FieldForInputPassword } from '../FieldForInputPassword/FieldForInputPassword';
import styles from './LoginForm.module.css';

export function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const isDisabled = login === '' || password === '';

  return(
    <div className={styles.container}>
      <FieldForInput signField={'Логин'} type={'text'} login={login} setLogin={setLogin}/>
      <FieldForInputPassword signField={'Пароль'} password={password} setPassword={setPassword}/>
      <a href='url' className={styles.hyperLink}>Проблема со входом?</a>
      <ButtonAcceptForm text={'Войти'} isDisabled={isDisabled}/>
    </div>
  );
}