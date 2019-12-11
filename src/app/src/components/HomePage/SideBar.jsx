import React, { useEffect, useState } from "react";
import { SideBarContainer } from "./styles/homePage";
import { getMenuItems } from "../../apiHelpers/api";
import MenuItem from "./MenuItem";

export default function SideBar(props) {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function getContent() {
      const resp = await getMenuItems();
      console.log(resp);
      setMenuItems(resp.nav);
    }
    getContent();
  }, []);

  return (
    <SideBarContainer>
      {!!menuItems.length &&
        menuItems.map(item => (
          <MenuItem key={item.id} item={item} {...props} />
        ))}
    </SideBarContainer>
  );
}
