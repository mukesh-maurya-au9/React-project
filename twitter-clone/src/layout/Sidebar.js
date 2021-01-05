import React from "react";
import './layoutCSS/Style.css';
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaBell,
  FaRegEnvelope,
  FaBookmark,
  FaClipboardList,
  FaMehBlank,
  FaUserAlt
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="ulSidebar">
        <li>
          <Link>
            <FaTwitter className="twitterIcon" />
          </Link>
        </li>
        <li>
          <Link className="ulSidebar">
            <FaHome className="icon homeLogo" />
            Home
          </Link>
        </li>
        <li>
          <Link className="ulSidebar">
            <FaHashtag className="icon" />
            Explore
          </Link>
        </li>
        <li>
          <Link className="ulSidebar">
            <FaBell className="icon" />
            Notifications
          </Link>
        </li>
        <li>
          <Link className="ulSidebar">
            <FaRegEnvelope className="icon" />
            Messages
          </Link>
        </li>
        <li>
          <Link className="ulSidebar">
            <FaBookmark className="icon" />
            Bookmarks
          </Link>
        </li>
        <li>
          <Link className="ulSidebar">
            <FaClipboardList className="icon" />
            Lists
          </Link>
        </li>
        <li>
          <Link className="ulSidebar">
            <FaUserAlt className="icon" />
            Profile
          </Link>
        </li>
        <li>
          <Link className="ulSidebar">
            <FaMehBlank className="icon"/>
            More
          </Link>
        </li>
        <div className="sidebarTweetBtn">
            <Link className="sidebarTweet"> Tweet </Link>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
