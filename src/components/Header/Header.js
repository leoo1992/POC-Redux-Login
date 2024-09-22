import React from "react";
import styles from "./Header.module.css";
import LogoutBtn from "../UX/Buttons/LogoutBtn/LogoutBtn";

const Header = () => {
  function handleLogout() {}
  return (
    <div className={styles.header}>
      <h3 className={styles.title}>Login</h3>
      <LogoutBtn func={handleLogout} text="x" />
    </div>
  );
};

export default Header;
