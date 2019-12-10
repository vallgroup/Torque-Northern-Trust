import React from "react";
import { SideBarContainer } from "./styles/homePage";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <SideBarContainer>
      <Link to="/grid">Link to Grid</Link>
    </SideBarContainer>
  );
}
