import { useState } from "react";
import NavBar from "./NavBar";
import MenuButton from "./MenuButton";

function NavBarMenu() {
  const [open, setOpen] = useState(false);

  //https://progradudi.netlify.app/crear-menu-react/

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div>
      <NavBar open={open} />
      <MenuButton open={open} handleClick={handleClick} />
    </div>
  );
}

export default NavBarMenu;
