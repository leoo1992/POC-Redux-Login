import React from "react";
import styles from "./Photos.module.css";
import PhotosContent from "./PhotosContent";
import { useSelector, useDispatch } from "react-redux";
import { loadNewPhotos } from "../../redux/stores/photos/photos";
import AddPhotosBtn from "../UX/Buttons/AddPhotosBtn/AddPhotosBtn";
import ResetPhotosBtn from "../UX/Buttons/ResetPhotosBtn/ResetPhotosBtn";
import Loader from "../UX/Loader/Loader";

const Photos = () => {
  const dispatch = useDispatch();
  const { data, infinite, loading } = useSelector((state) => state.photos);

  React.useEffect(() => {
    dispatch(loadNewPhotos(1));
  }, [dispatch]);

  const renderFooter = () => {
    if (!infinite) {
      return (
        <div className={styles.endPhotos}>
          <span>Sem mais fotos</span>
          <ResetPhotosBtn text="Reset" />
        </div>
      );
    }

    if (loading) {
      return <Loader />;
    }

    return <AddPhotosBtn text="+" />;
  };

  return (
    <section className={styles.container}>
      <PhotosContent />
      {renderFooter()}
    </section>
  );
};

export default Photos;
