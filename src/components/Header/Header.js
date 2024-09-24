import React from "react";
import styles from "./Header.module.css";
import LogoutBtn from "../UX/Buttons/LogoutBtn/LogoutBtn";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../UX/Loader/Loader";
import { userLogout } from "../../redux/stores/login/login";

const Header = () => {
  const token = useSelector((state) => state.login.token);
  const user = useSelector((state) => state.login.user);
  const loading = user.loading || token.loading;
  const loggedIn = user.data || token.data;
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(userLogout());
  }

  return (
    <header className={styles.header}>
      <h3 className={styles.title}>Dogs App</h3>

      {loading ? <Loader condition={user.loading} /> : null}
      {loggedIn ? (
        <LogoutBtn func={handleLogout} condition={user.data} text="Logout" />
      ) : null}
    </header>
  );
};

export default Header;
