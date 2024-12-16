import styles from './RegistrationForm.module.css'
import { ButtonAcceptForm } from '../ButtonAcceptForm/ButtonAcceptForm';
import { FieldForInput } from '../FieldForInput/FieldForInput';
import { FieldForInputPassword } from '../FieldForInputPassword/FieldForInputPassword';
import { useState } from 'react';

export function RegistrationForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const isDisabled = login === '' || password === '';

  return(
    <form>
      <div className={styles.text}>Заполните форму для регистрации.</div>
      <FieldForInput signField={'Логин'} type={'text'} login={login} setLogin={setLogin}/>
      <FieldForInputPassword signField={'Пароль'} password={password} setPassword={setPassword}/>
      <FieldForInputPassword signField={'Подтвердите пароль'} password={passwordConfirm} setPassword={setPasswordConfirm}/>
      <ButtonAcceptForm type={'submit'} text={'Подтвердить регистрацию'} isDisabled={isDisabled}/>
    </form>
  );
}