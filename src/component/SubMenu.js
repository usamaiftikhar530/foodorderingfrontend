import { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

function SubMenu(props) {
  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const handleClickOutside = (e) => {
    if (!refOne.current.contains(e.target)) {
      // console.log("Click Outside Submenu");
      props.changeSubmenuStateFunc(false);
    } else {
      // console.log("Click Inside Submenu");
    }
  };

  return (
    <div className="subMenu" id={props.activeID} ref={refOne}>
      <div className="subMenuBox">
        <ul>
          <p>Category</p>
          {props.categoryOne.map(function (item) {
            return <NavLink to={"/menu"}><li>{item}</li></NavLink>;
          })}
        </ul>
      </div>
      <div className="subMenuBox">
        <ul>
          <p>Category</p>
          {props.categoryOne.map(function (item, index) {
            return <NavLink to={"/menu"}><li>{index < 5 ? item : null}</li></NavLink>;
          })}
        </ul>
      </div>
      <div className="subMenuBox">
        <ul>
          <p>Category</p>
          {props.categoryOne.map(function (item, index) {
            return <NavLink to={"/menu"}><li>{index < 6 ? item : null}</li></NavLink>;
          })}
        </ul>
      </div>
      <div className="subMenuBox">
        <ul>
          <p>Category</p>
          {props.categoryOne.map(function (item, index) {
            return <NavLink to={"/menu"}><li>{index < 5 ? item : null}</li></NavLink>;
          })}
        </ul>
      </div>
      <div className="subMenuBox">
        <ul>
          <p>Category</p>
          {props.categoryOne.map(function (item, index) {
            return <NavLink to={"/menu"}><li>{index < 2 ? item : null}</li></NavLink>;
          })}
        </ul>
      </div>
    </div>
  );
}

export default SubMenu;
