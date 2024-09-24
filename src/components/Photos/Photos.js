import React from "react";
import styles from "./Photos.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos } from "../../redux/stores/photos/photos";

const Photos = () => {
  const dispatch = useDispatch();
  // const { photos } = useSelector((state) => state.login.token)

  React.useEffect(() => {
    dispatch(fetchPhotos(1));
  }, [dispatch]);

  return <section className={styles.container}>Photos</section>;
};

export default Photos;
