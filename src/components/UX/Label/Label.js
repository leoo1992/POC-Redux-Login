import styles from "./Label.module.css";
import PropTypes from "prop-types";

Label.propTypes = {
  htmlFor: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default function Label({ htmlFor, text }) {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {text}
    </label>
  );
}
