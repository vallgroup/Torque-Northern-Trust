import React from "react";
import { MenuItemContainer, SideBarP } from "./Home.styles";
import { useHistory } from "react-router-dom";

export default function MenuItem({ item }) {
  const { title, slug } = item;
  const history = useHistory();

  const linkToSlug = slug => {
    history.push(`/${slug}`);
  };
  return (
    <MenuItemContainer onClick={() => linkToSlug(slug)}>
      <SideBarP>{title}</SideBarP>
    </MenuItemContainer>
  );
}
