import styles from "./Loader.module.css";
import PropTypes from "prop-types";

Loader.propTypes = {
  condition: PropTypes.bool,
  element: PropTypes.string,
};

export default function Loader({ condition = false, element = "--------" }) {
  return (
    <div className={styles.loaderContainer}>
      {condition && <span className={styles.loader}>{element}</span>}
    </div>
  );
}
