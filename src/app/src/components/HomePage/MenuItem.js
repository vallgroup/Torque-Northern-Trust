import React from "react";
import {
  MenuLink,
  MenuItemContainer,
  SideBarP
} from "./Home.styles";

export default function MenuItem({ item }) {

  const { id, title, slug, post_type } = item;

  const getLink = () => {
    const endpoint = post_type.replace('_', '-');

    return `${endpoint}/${('torque_map' === post_type) ? id : slug}`
  };

  return (
    <MenuItemContainer>
      <MenuLink
        to={getLink()}
      >
        <SideBarP>{title}</SideBarP>
      </MenuLink>
    </MenuItemContainer>
  );
}
