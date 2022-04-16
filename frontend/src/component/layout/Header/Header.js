import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const options = {
  burgerColor: "#9e9e9e",
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  navColor1: "white",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Margin: "1vmax",
  link1Color: "rgba(35, 35, 35,0.8)",
  link1ColorHover: "#eb4034",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  searchIcon: true,
  FaShoppingCart: "/search",
  SearchIconElement: FaSearch,
  searchIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColorHover: "#eb4034",
  searchIconSize: "2vmax",
  profileIcon: true,
  profileIconUrl: "/login",
  ProfileIconElement: FaUserAlt,
  profileIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  profileIconSize: "2vmax",
  cartIcon: true,
  cartIconUrl: "/",
  CartIconElement: FaShoppingCart,
  cartIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
  cartIconSize: "2vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
