import styles from "./Input.module.css";
import PropTypes from "prop-types";

Input.propTypes = {
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default function Input({
  id,
  type = "text",
  placeholder= "",
  value,
  setValue,
}) {
  return (
    <input
      id={id}
      name={id}
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={({ target }) => setValue(target.value)}
      autoComplete=""
    />
  );
}
