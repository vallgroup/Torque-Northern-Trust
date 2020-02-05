import React, { useEffect } from "react";
import { SideBarContainer } from "./Home.styles";
import MenuItem from "./MenuItem";
import { useNortherTrustActions } from "../../redux/hooks/commands/useNorthernTrustActions";
import { useMenuItems } from "../../redux/hooks/queries/useMenuItems";

export default function SideBar() {
  const { fetchMenuItems } = useNortherTrustActions();

  useEffect(() => {
    return fetchMenuItems();
  }, []);

  const menuItems = useMenuItems();

  return (
    <SideBarContainer>
      {!!menuItems.success &&
        menuItems.nav.map(item => <MenuItem key={item.id} item={item} />)}
    </SideBarContainer>
  );
}
