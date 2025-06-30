import Logo from "../Logo/Logo";
import HeaderNav from "../HeaderNav/HeaderNav";

import s from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <Logo />
      <HeaderNav type="main" />
    </header>
  );
};

export default Header;
