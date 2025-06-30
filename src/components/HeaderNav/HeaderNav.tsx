import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../../redux/auth/selectors";
import clsx from "clsx";

import s from "./HeaderNav.module.css";
import LoginLogoutButton from "../LoginLogoutButton/LoginLogoutButton";
import RegisterButton from "../RegisterButton/RegisterButton";
import UserGreeting from "../UserGreeting/UserGreeting";

export interface HeaderNavProps {
  type?: string;
}

const HeaderNav = ({ type }: HeaderNavProps) => {
  const auth = useSelector(selectAuth);
  const isLoggedIn = Boolean(auth?.name);

  const navItems = [
    { link: "/", title: "Home" },
    { link: "/teachers", title: "Teachers" },
    ...(isLoggedIn ? [{ link: "/favorites", title: "Favorites" }] : []),
  ];

  return (
    <div className={clsx(s.wrapper, type === "main" && s.hidden)}>
      <nav>
        <ul className={s.nav}>
          {navItems.map(({ link, title }) => (
            <li key={title}>
              <NavLink className={s.link} to={link}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={s.auth}>
        <LoginLogoutButton />
        {isLoggedIn ? <UserGreeting name={auth.name} /> : <RegisterButton />}
      </div>
    </div>
  );
};

export default HeaderNav;
