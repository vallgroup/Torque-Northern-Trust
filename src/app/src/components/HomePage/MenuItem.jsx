import React from "react";
import { MenuItemContainer } from "./styles/homePage";

export default function MenuItem(props) {
  const { title, slug } = props.item;
  const linkToSlug = slug => {
    props.history.push(`/${slug}`);
  };
  return (
    <MenuItemContainer onClick={() => linkToSlug(slug)}>
      {title}
    </MenuItemContainer>
  );
}
