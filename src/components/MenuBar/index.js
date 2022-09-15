import { Menu } from "semantic-ui-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const [active, setActive] = useState(false);

  return (
    <div>
      <Menu pointing>
        <Link to="tracks">
          <Menu.Item
            as="p"
            name="Tracks"
            active={active === "Tracks"}
            onClick={(e, { name }) => setActive(name)}
          />
        </Link>
        <Link to="artists">
          <Menu.Item
            as="p"
            name="Artists"
            active={active === "Artists"}
            onClick={(e, { name }) => setActive(name)}
          />
        </Link>
      </Menu>
    </div>
  );
};

export default MenuBar;
