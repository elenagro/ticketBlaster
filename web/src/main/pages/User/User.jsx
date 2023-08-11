import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../store/auth-context";

import Wrapper from "../../../shared/FormElements/Wrapper";
import UserDetails from "../../components/UserAccount/UserDetails";
import UsersList from "../UsersList/UsersList";
import Events from "../Events/Events";
import TicketsHistory from "../TicketsHistory/TicketsHistory";
import UserNav from "../../components/UserAccount/UserNav";

import styles from "./User.module.css";

const User = () => {
  const location = useLocation();
  const { menuContent, setMenuContent, activeMenuLink, setActiveMenuLink } =
    useAuth();

  useEffect(() => {
    switch (location.pathname) {
      case "/events":
        setMenuContent("Events");

        break;
      case "/users":
        setMenuContent("Users");

        break;
      case "/tickets-history":
        setMenuContent("Tickets History");

        break;
      default:
        setMenuContent("User Details");
    }
  }, [location.pathname]);

  const handleMenuClick = (item) => {
    setActiveMenuLink(item);
  };

  return (
    <Wrapper>
      <div className={styles["right-side"]}>
        <UserNav onMenuClick={handleMenuClick} />
      </div>
      <div className={styles["left-side-menu"]}>
        {menuContent === "User Details" && <UserDetails />}
        {menuContent === "Events" && <Events />}
        {menuContent === "Users" && <UsersList />}
        {menuContent === "Tickets History" && <TicketsHistory />}
      </div>
    </Wrapper>
  );
};
export default User;
