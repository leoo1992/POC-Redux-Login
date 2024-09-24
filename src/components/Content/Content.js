import Login from "../Login/Login";
import Photos from "../Photos/Photos";
import { useSelector } from "react-redux";
import Loader from "../UX/Loader/Loader";

const Content = () => {
  const token = useSelector((state) => state.login.token);
  const user = useSelector((state) => state.login.user);

  if (token.loading || user.loading) return <Loader />;
  if (user.data) return <Photos />;
  else return <Login />;
};

export default Content;
