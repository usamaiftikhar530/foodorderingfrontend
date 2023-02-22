import { NavLink } from "react-router-dom";

function FoodItem(props) {
  return (
    <div className="col-lg-3 menuBox">
      <div className="menuBoxImg">
        <NavLink to={"/product/" + props.id}>
          <img src={props.img} alt="" />
        </NavLink>
      </div>
      <div className="menuBoxContent">
        <h3>{props.name}</h3>
        <p>${props.price}</p>

        {/* <NavLink to={"/cart"}>
          <button >Cart</button>
        </NavLink> */}

      <button onClick={()=> props.PostCartFunc(props.id)}>Cart</button>

      </div>
    </div>
  );
}

export default FoodItem;
