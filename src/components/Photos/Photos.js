import React from "react";
import styles from "./Photos.module.css";
import PhotosContent from "./PhotosContent";
import { useSelector, useDispatch } from "react-redux";
import { fetchPhotos } from "../../redux/stores/photos/photos";

const Photos = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.photos);

  React.useEffect(() => {
    dispatch(fetchPhotos(1));
  }, [dispatch]);

  return (
    <section className={styles.container}>
      {data ? <PhotosContent /> : <span>Sem fotos</span>}
    </section>
  );
};

export default Photos;
