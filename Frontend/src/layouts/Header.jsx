import React from "react";
import TopBar from "../components/header-components/TopBar/TopBar";
import NavMenu from "../components/header-components/NavMenu/NavMenu";

const Header = () => {
  return (
    <>
      <div>
        <TopBar />
        <NavMenu/>
      </div>
    </>
  );
};

export default Header;
