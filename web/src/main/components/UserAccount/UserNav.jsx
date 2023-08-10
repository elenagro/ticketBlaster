import React from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../store/auth-context";
import styles from "./UserNav.module.css";

import Title from "../../../shared/FormElements/Title";
import Button from "../../../shared/FormElements/Button";

const UserNav = ({ activeMenuLink, onMenuClick }) => {
  const { userId } = useParams();
  const { isLoggedIn, isLoggedOut, setIsLoggedOut } = useAuth();

  const handleLogOut = () => {
    setIsLoggedOut(true);
  };

  return (
    <div className={styles["menu"]}>
      <Title title={activeMenuLink} />
      {activeMenuLink === "Events" && (
        <Link to={`/create-event/${userId}`}>
          <Button>Create Event</Button>
        </Link>
      )}

      <ul className={styles["right-side-menu"]}>
        <li
          className={`${styles["menu-link"]} ${
            activeMenuLink === "Events" ? styles["active-link"] : ""
          }`}
          onClick={() => onMenuClick("Events")}
        >
          Events
        </li>
        <li
          className={`${styles["menu-link"]} ${
            activeMenuLink === "Users" ? styles["active-link"] : ""
          }`}
          onClick={() => onMenuClick("Users")}
        >
          Users
        </li>
        <li
          className={`${styles["menu-link"]} ${
            activeMenuLink === "Tickets History" ? styles["active-link"] : ""
          }`}
          onClick={() => onMenuClick("Tickets History")}
        >
          Tickets History
        </li>
        {/* /${userId} */}
        <li
          className={`${styles["menu-link"]} ${
            activeMenuLink === "User Details" ? styles["active-link"] : ""
          }`}
          onClick={() => onMenuClick("User Details")}
        >
          User Details
        </li>
        {isLoggedIn && !isLoggedOut && (
          <>
            <li>
              <Link
                to="/"
                className={styles["menu-link"]}
                onClick={handleLogOut}
              >
                Log Out
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default UserNav;
