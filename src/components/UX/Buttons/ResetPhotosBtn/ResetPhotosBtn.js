import styles from "./ResetPhotosBtn.module.css";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removePhotos } from "../../../../redux/stores/photos/photos";

ResetPhotosBtn.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default function ResetPhotosBtn({ type = "button", text }) {
  const dispatch = useDispatch();

  function handleResetPhotos() {
    dispatch(removePhotos());
  }

  return (
    <button
      aria-label="ResetPhotos"
      type={type}
      onClick={handleResetPhotos}
      className={styles.removePhotosButton}
    >
      {text}
    </button>
  );
}
