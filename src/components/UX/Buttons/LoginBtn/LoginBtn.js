import styles from "./LoginBtn.module.css";
import PropTypes from "prop-types";

LoginBtn.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default function LoginBtn({type = "submit", text}) {
  return (
    <button className={styles.button} type={type}>
      {text}
    </button>
  );
}
