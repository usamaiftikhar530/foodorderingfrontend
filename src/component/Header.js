import SubMenu from "./SubMenu";
import SideMenu from "./SideMenu";
import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";

const pizza1Category = [
  "Pizza 1",
  "Pizza 2",
  "Pizza 3",
  "Pizza 4",
  "Pizza 5",
  "Pizza 6",
  "Pizza 7",
];
const burger1Category = [
  "Burger 1",
  "Burger 2",
  "Burger 3",
  "Burger 4",
  "Burger 5",
  "Burger 6",
  "Burger 7",
];
const dessert1Category = [
  "Dessert 1",
  "Dessert 2",
  "Dessert 3",
  "Dessert 4",
  "Dessert 5",
  "Dessert 6",
  "Dessert 7",
];
const drink1Category = [
  "Drink 1",
  "Drink 2",
  "Drink 3",
  "Drink 4",
  "Drink 5",
  "Drink 6",
  "Drink 7",
];

function Header() {
  const [activeSubmenu, SetActiveSubmenu] = useState(false);
  const [activeSidemenu, SetActiveSidemenu] = useState(false);
  const [category1, SetCategory1] = useState([]);

  useEffect(() => {
    console.log(category1.length);
  });

  function ChangeSubmenuState(s) {
    SetActiveSubmenu(s);
  }
  function ChangeSidemenuState(s) {
    // console.log("Side Menu Func Call");
    SetActiveSidemenu(s);
  }

  function ChangeCategory1State(index) {
    let category1Temp = [];
    switch (index) {
      case 0:
        category1Temp = pizza1Category;
        break;
      case 1:
        category1Temp = burger1Category;
        break;
      case 2:
        category1Temp = dessert1Category;
        break;
      case 3:
        category1Temp = drink1Category;
        break;
    }

    SetCategory1(category1Temp);
  }

  return (
    <>
      <div className="navBar">
        <div className="menuBars">
          <a href="#" onClick={() => SetActiveSidemenu(true)}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
        <div className="logoName">
          <NavLink to={"/"}>Food Order</NavLink>
        </div>
        <div className="cartIcon">
          <NavLink to={"/cart"}>
            <i class="fa fa-shopping-cart"></i>
          </NavLink>
        </div>
        <div className="navBox">
          <ul>
            <li className="navLink">
              <NavLink
                to={"/menu"}
                onMouseOver={() => {
                  ChangeSubmenuState(true);
                  ChangeCategory1State(0);
                }}
              >
                Pizza
              </NavLink>
            </li>
            <li className="navLink">
              <NavLink
                to={"/menu"}
                onMouseOver={() => {
                  ChangeSubmenuState(true);
                  ChangeCategory1State(1);
                }}
              >
                Burger
              </NavLink>
            </li>
            <li className="navLink">
              <NavLink
                to={"/menu"}
                onMouseOver={() => {
                  ChangeSubmenuState(true);
                  ChangeCategory1State(2);
                }}
              >
                Desserts
              </NavLink>
            </li>
            <li className="navLink">
              <NavLink
                to={"/menu"}
                onMouseOver={() => {
                  ChangeSubmenuState(true);
                  ChangeCategory1State(3);
                }}
              >
                Drinks
              </NavLink>
            </li>
            <li className="navLink">
              <NavLink to={"/menu"}>More</NavLink>
            </li>
          </ul>
        </div>
        {/* SubMenu */}
        <SubMenu
          activeID={activeSubmenu ? "active" : ""}
          changeSubmenuStateFunc={ChangeSubmenuState}
          categoryOne={category1}
        />

        {/* SideMenu */}
        <SideMenu
          activeSideID={activeSidemenu ? "active" : ""}
          changeSidemenuStateFunc={ChangeSidemenuState}
        />
      </div>
    </>
  );
}

export default Header;
