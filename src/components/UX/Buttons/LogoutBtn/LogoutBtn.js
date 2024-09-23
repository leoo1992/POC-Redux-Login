import styles from "./LogoutBtn.module.css";
import PropTypes from "prop-types";

LogoutBtn.propTypes = {
  text: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default function LogoutBtn({
  type = "button",
  text,
  func,
}) {
  return (
    <button type={type} onClick={func} className={styles.logoutButton}>
      {text}
    </button>
  );
}
