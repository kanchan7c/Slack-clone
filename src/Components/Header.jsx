import React from "react";
import "./header.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useStateValue } from "../StateProvider";
import { Avatar } from "@mui/material";

const Header = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="header">
      <div className="header_left">
        <Avatar
          className="header_avatar-icon"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <AccessTimeIcon />
      </div>
      <div className="header_search">
        <SearchIcon className="header_search-icon" />
        <input
          className="header_search-input"
          type="search"
          placeholder="Search"
        />
      </div>
      <div className="header_right">
        <HelpOutlineIcon className="header_help-icon" />
      </div>
    </div>
  );
};

export default Header;
