import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { autoLogin, login } from "../../redux/stores/login/login";
import Label from "../UX/Label/Label";
import Input from "../UX/Input/Input";
import Form from "../UX/Form/Form";
import LoginBtn from "../UX/Buttons/LoginBtn/LoginBtn";
import Loader from "../UX/Loader/Loader";

const Login = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.login.token);
  const user = useSelector((state) => state.login.user);

  //   React.useEffect(() => {
  //     dispatch(autoLogin());
  //   }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(login({ username, password }));

    setUsername("");
    setPassword("");
    return e.target.reset();
  }

  return (
    <Form submitFunc={handleSubmit}>
      <Loader condition />
      <Label htmlFor="username" text="Usuário" />
      <Input
        id="username"
        placeholder="Usuário"
        value={username}
        setValue={setUsername}
      />
      <Label htmlFor="password" text="Senha" />
      <Input
        id="password"
        type="password"
        placeholder="Senha"
        value={password}
        setValue={setPassword}
      />
      <LoginBtn text="Entrar" />
    </Form>
  );
};

export default Login;
