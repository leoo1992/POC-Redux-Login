import React from "react";
import styles from "./Login.module.css";
import { useSelector, useDispatch } from "react-redux";
import { autoLogin, login } from "../../redux/stores/login/login";
import Label from "../UX/Label/Label";
import Input from "../UX/Input/Input";
import Form from "../UX/Form/Form";
import LoginBtn from "../UX/Buttons/LoginBtn/LoginBtn";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();

    React.useEffect(() => {
      dispatch(autoLogin());
    }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(login({ username, password }));

    setUsername("");
    setPassword("");
    return e.target.reset();
  }

  return (
    <Form submitFunc={handleSubmit}>
      <h3 className={styles.title}>Login</h3>
      <Label htmlFor="username" text="Usuário" />
      <Input
        id="username"
        value={username}
        setValue={setUsername}
      />
      <Label htmlFor="password" text="Senha" />
      <Input
        id="password"
        type="password"
        value={password}
        setValue={setPassword}
      />
      <LoginBtn text="Entrar" />
    </Form>
  );
};

export default Login;
