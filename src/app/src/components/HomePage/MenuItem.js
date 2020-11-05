import React from "react";
import {
  MenuLink,
  MenuItemContainer,
  SideBarP
} from "./Home.styles";

import {logEvent} from '../../firebase'
import {MAIN_NAV_EVENT} from '../../firebase/events'

export default function MenuItem({ item }) {
// console.log(item)
  const { id, title, slug, post_type } = item;

  const getLink = () => {
    const endpoint = ('nav_menu_item' !== post_type)
      ? post_type.replace('_', '-')
      : ''

    return `${endpoint}/${('torque_map' === post_type) ? id : slug}`
  };

  return (
    <MenuItemContainer>
      <MenuLink
      onClick={() => logEvent(MAIN_NAV_EVENT, {
        url: slug,
        page: title
      })}
        to={getLink()}
      >
        <SideBarP>{title}</SideBarP>
      </MenuLink>
    </MenuItemContainer>
  );
}
