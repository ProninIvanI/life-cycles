import { useState } from "react";
import { ButtonAcceptForm } from "../ButtonAcceptForm/ButtonAcceptForm";
import { FieldForInput } from "../FieldForInput/FieldForInput";
import { FieldForInputPassword } from "../FieldForInputPassword/FieldForInputPassword";
import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { loginSuccessAddToken, loginSuccessAddUsername } from '../../../Store/Slices/UserSlice'

export function LoginForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const isDisabled = login === "" || password === "";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const url = "http://10.4.0.255:8080/api/auth/login";
    try {
      const response = await axios.post(url, {
        login,
        password,
      });
      dispatch(loginSuccessAddToken(response))
      dispatch(loginSuccessAddUsername(login))
      navigate("/home");
    } catch (error) {
      if (error.response) {
        setError(
          error.response.data.message ||
            "Не удалось войти. Проверьте логин и пароль."
        );
      } else if (error.request) {
        setError("Сервер не отвечает. Попробуйте позже.");
      } else {
        setError("Ошибка: " + error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <FieldForInput
        signField={"Логин"}
        type={"text"}
        login={login}
        setLogin={setLogin}
      />
      <FieldForInputPassword
        signField={"Пароль"}
        password={password}
        setPassword={setPassword}
      />
      {error && <div className={styles.error}>{error}</div>}
      <a href="url" className={styles.hyperLink}>
        Проблема со входом?
      </a>
      <ButtonAcceptForm
        type={"submit"}
        text={loading ? "Загрузка..." : "Войти"}
        isDisabled={isDisabled}
      />
    </form>
  );
}
