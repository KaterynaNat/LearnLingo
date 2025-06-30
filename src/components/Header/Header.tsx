import Logo from "../Logo/Logo";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";
import BurgerBtn from "../BurgerBtn/BurgerBtn";
import Container from "../shared/Container/Container";
import HeaderNav from "../HeaderNav/HeaderNav";

import s from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <Container additionalClass={s.header}>
        <Logo />
        <ThemeSwitcher />
        <BurgerBtn />
        <HeaderNav type="main" />
      </Container>
    </header>
  );
};

export default Header;
