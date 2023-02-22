import { useState } from "react";
import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

function SideMenu(props) {
  const refOne = useRef(null);
  const [pizzaDropdown, SetPizzaDropdown] = useState(false);
  const [burgerDropdown, SetBurgerDropdown] = useState(false);
  const [dessertDropdown, SetDessertDropdown] = useState(false);
  const [drinkDropdown, SetDrinkDropdown] = useState(false);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (!refOne.current.contains(e.target)) {
      //   console.log("Click Outside Sidemenu");
      props.changeSidemenuStateFunc(false);
    } else {
      //   console.log("Click Inside Sidemenu");
    }
  };

  return (
    <div className="sideBar" id={props.activeSideID} ref={refOne}>
      <div
        className="sideCross"
        onClick={() => props.changeSidemenuStateFunc(false)}
      >
        <a href="#">
          <i className="fa fa-close"></i>
        </a>
      </div>
      <div className="sideLinkContainer">
        <div className="sideLinkMain">
          <a href="#" onClick={() => SetPizzaDropdown(!pizzaDropdown)}>
            Pizza
            {pizzaDropdown ? (
              <i className="fa fa-caret-up upIcon"></i>
            ) : (
              <i className="fa fa-caret-down dropIcon"></i>
            )}
          </a>
          <ul className={pizzaDropdown ? "" : "pizzaList"}>
            <li>
              <NavLink to={"/menu"}>Pizza 1</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>Pizza 2</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>Pizza 3</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>Pizza 4</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>Pizza 5</NavLink>
            </li>
          </ul>
        </div>
        <div className="sideLinkMain">
          <a href="#" onClick={() => SetBurgerDropdown(!burgerDropdown)}>
            Burger
            {burgerDropdown ? (
              <i className="fa fa-caret-up upIcon"></i>
            ) : (
              <i className="fa fa-caret-down dropIcon"></i>
            )}
          </a>
          <ul className={burgerDropdown ? "" : "burgerList"}>
            <li>
              <NavLink to={"/menu"}>Burger 1</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>Burger 2</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>Burger 3</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>Burger 4</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>Burger 5</NavLink>
            </li>
          </ul>
        </div>
        <div className="sideLinkMain">
          <a href="#" onClick={() => SetDessertDropdown(!dessertDropdown)}>
            Desserts
            {dessertDropdown ? (
              <i className="fa fa-caret-up upIcon"></i>
            ) : (
              <i className="fa fa-caret-down dropIcon"></i>
            )}
          </a>
          <ul className={dessertDropdown ? "" : "dessertList"}>
            <li>
              <NavLink to={"/menu"}>Dessert 1</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>Dessert 2</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>Dessert 3</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>Dessert 4</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>Dessert 5</NavLink>
            </li>
          </ul>
        </div>
        <div className="sideLinkMain">
          <a href="#" onClick={() => SetDrinkDropdown(!drinkDropdown)}>
            Drinks
            {drinkDropdown ? (
              <i className="fa fa-caret-up upIcon"></i>
            ) : (
              <i className="fa fa-caret-down dropIcon"></i>
            )}
          </a>
          <ul className={drinkDropdown ? "" : "drinkList"}>
            <li>
              <NavLink to={"/menu"}>Drink 1</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>Drink 2</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>Drink 3</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>Drink 4</NavLink>
            </li>
            <li>
              <NavLink to={"/menu"}>Drink 5</NavLink>
            </li>
          </ul>
        </div>
        <div className="sideLinkMain">
          <a href="#">More</a>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
