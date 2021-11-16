import React from "react";
import "./header.css";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

const Header = () => {
  return (
    <div className="header">
      <div className="header_left">
        <AccountCircleIcon
          className="header_avatar-icon"
          alt="Kanchan" //{user?.displayName}
          src="" //{user?.photoURL}
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
