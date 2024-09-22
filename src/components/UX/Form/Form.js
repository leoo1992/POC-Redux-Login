import styles from "./Form.module.css";
import PropTypes from "prop-types";

Form.propTypes = {
  children: PropTypes.node,
  submitFunc: PropTypes.func.isRequired,
};
export default function Form({ children, submitFunc }) {
  return (
    <form className={styles.form} onSubmit={submitFunc}>
      {children}
    </form>
  );
}
