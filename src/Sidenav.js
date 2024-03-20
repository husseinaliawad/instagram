import React from "react";
import "./Sidenav.css";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import ExploreIcon from "@mui/icons-material/Explore";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ChatIcon from "@mui/icons-material/Chat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";

const Sidenav = () => {
  return (
    <div className="sidenav">
     
      <div className="sidenav__buttons">
        <button className="sidenav__button">
          <HomeIcon />
          <span>Home</span>
        </button>
        <button className="sidenav__button">
          <SearchIcon />
          <span>Search</span>
        </button>
        <button className="sidenav__button">
          <ExploreIcon />
          <span>Explore</span>
        </button>
        <button className="sidenav__button">
          <SlideshowIcon />
          <span>Slideshow</span>
        </button>
        <button className="sidenav__button">
          <ChatIcon />
          <span>Chat</span>
        </button>
        <button className="sidenav__button">
          <FavoriteBorderIcon />
          <span>Favorites</span>
        </button>
        <button className="sidenav__button">
          <AddCircleOutlineIcon />
          <span>Add</span>
        </button>
      </div>
      <div className="sidenav__more">
        <button className="logout__button">Logout</button>
      </div>
    </div>
  );
};

export default Sidenav;