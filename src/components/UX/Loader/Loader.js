import styles from "./Loader.module.css";
import PropTypes from "prop-types";

Loader.propTypes = {
  element: PropTypes.string,
};

export default function Loader({ element = "Carregando..." }) {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loader}>{element}</span>
    </div>
  );
}
