import styles from "./LogoutBtn.module.css";
import PropTypes from "prop-types";

LogoutBtn.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  func: PropTypes.func.isRequired,
};

export default function LogoutBtn({ type = "button", text, func }) {
  return (
    <button type={type} onClick={func} className={styles.logoutButton}>
      {text}
    </button>
  );
}
