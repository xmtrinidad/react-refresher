import { useState } from "react";
import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";

function RootLayout() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true);
  }
  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <Outlet />
    </>
  );
}

export default RootLayout;