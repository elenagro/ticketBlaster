import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Wrapper from "../../../shared/FormElements/Wrapper";
import UserDetails from "../../components/UserAccount/UserDetails";
import UsersList from "../UsersList/UsersList";
import Events from "../Events/Events";
import TicketsHistory from "../TicketsHistory/TicketsHistory";
import UserNav from "../../components/UserAccount/UserNav";

import styles from "./User.module.css";

const User = () => {
  const location = useLocation();
  const [menuContent, setMenuContent] = useState("User Details");
  const [activeMenuLink, setActiveMenuLink] = useState("User Details");

  useEffect(() => {
    switch (location.pathname) {
      case "/events":
        setMenuContent("Events");
        setActiveMenuLink("Events");
        break;
      case "/users":
        setMenuContent("Users");
        setActiveMenuLink("Users");
        break;
      case "/tickets-history":
        setMenuContent("Tickets History");
        setActiveMenuLink("Tickets History");
        break;
      default:
        setMenuContent("User Details");
        setActiveMenuLink("User Details");
    }
  }, [location.pathname]);

  const handleMenuClick = (item) => {
    setActiveMenuLink(item);
  };

  return (
    <Wrapper>
      <div className={styles["right-side"]}>
        <UserNav
          activeMenuLink={activeMenuLink}
          onMenuClick={handleMenuClick}
        />
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
