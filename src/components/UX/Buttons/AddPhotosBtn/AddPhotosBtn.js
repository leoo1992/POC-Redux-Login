import styles from "./AddPhotosBtn.module.css";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { loadNewPhotos } from "../../../../redux/stores/photos/photos";

AddPhotosBtn.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default function AddPhotosBtn({ type = "button", text }) {
  const dispatch = useDispatch();
  const { data, list, pages } = useSelector((state) => state.photos);

  function handleAddPhotos() {
    dispatch(loadNewPhotos(pages + 1));
  }

  return (
    <button
      aria-label="addPhotos"
      type={type}
      onClick={handleAddPhotos}
      className={styles.addPhotosButton}
    >
      {text}
    </button>
  );
}
