import React from "react";
import { MenuItemContainer } from "./styles/homePage";
import { useHistory } from "react-router-dom";

export default function MenuItem({ item }) {
  const { title, slug } = item;
  const history = useHistory();

  const linkToSlug = slug => {
    history.push(`/${slug}`);
  };
  return (
    <MenuItemContainer onClick={() => linkToSlug(slug)}>
      {title}
    </MenuItemContainer>
  );
}
