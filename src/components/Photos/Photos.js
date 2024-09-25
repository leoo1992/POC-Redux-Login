import React from "react";
import styles from "./Photos.module.css";
import PhotosContent from "./PhotosContent";
import { useSelector, useDispatch } from "react-redux";
import { loadNewPhotos } from "../../redux/stores/photos/photos";
import AddPhotosBtn from "../UX/Buttons/AddPhotosBtn/AddPhotosBtn";
import ResetPhotosBtn from "../UX/Buttons/ResetPhotosBtn/ResetPhotosBtn";

const Photos = () => {
  const dispatch = useDispatch();
  const { data, infinite } = useSelector((state) => state.photos);

  React.useEffect(() => {
    dispatch(loadNewPhotos(1));
  }, [dispatch]);

  return (  
    <section className={styles.container}>
      {data ? <PhotosContent /> : <span>Sem fotos</span>}
      {infinite? <AddPhotosBtn text="+" />: <span>Sem mais fotos <ResetPhotosBtn text="Reset"/></span>}
    </section>
  );
};

export default Photos;
