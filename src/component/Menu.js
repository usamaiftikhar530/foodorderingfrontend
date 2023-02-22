import { useEffect } from "react";
import { useState } from "react";
import ProductData from "../ProductData";
import FoodItem from "./FoodItem";
import { useNavigate } from "react-router-dom";

function Menu() {
const url = 'https://foodorderingbackend.adaptable.app';

  const navigate = useNavigate();
  const [menuCategory, SetMenuCategory] = useState(0);
  const [filterProducts, SetFilterProducts] = useState(ProductData);

  useEffect(() => {
    if (menuCategory === 0) {
      SetFilterProducts(ProductData);
    } else {
      ApplyFilter();
    }
  }, [menuCategory]);

  //Apply Filter
  function ApplyFilter() {
    const filterResult = ProductData.filter((item) => {
      return item.category === menuCategory;
    });

    SetFilterProducts(filterResult);
  }

  //Product Add on Cart
  const PostCartProduct = async (index)=>{
    const pN= ProductData.find((item)=> item.id==index);
    const productName = pN.name;

    const res = await fetch(url + "/cart",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        productName
      })
    })

    if (res.status === 201){
      window.alert("Product Added Successfuly");
    } else if (res.status === 422){
      window.alert("Failed To Add In Cart");
    } else{
      navigate("/signin");
    }
  }

  return (
    <div className="menu">
      <h1>Our Menu</h1>
      <ul>
        <li>
          <a
            className={menuCategory === 0 ? "active" : ""}
            onClick={() => SetMenuCategory(0)}
          >
            All
          </a>
        </li>
        <li>
          <a
            className={menuCategory === 1 ? "active" : ""}
            onClick={() => SetMenuCategory(1)}
          >
            Pizza
          </a>
        </li>
        <li>
          <a
            className={menuCategory === 2 ? "active" : ""}
            onClick={() => SetMenuCategory(2)}
          >
            Burger
          </a>
        </li>
        <li>
          <a
            className={menuCategory === 3 ? "active" : ""}
            onClick={() => SetMenuCategory(3)}
          >
            Dessert
          </a>
        </li>
        <li>
          <a
            className={menuCategory === 4 ? "active" : ""}
            onClick={() => SetMenuCategory(4)}
          >
            Drink
          </a>
        </li>
      </ul>
      <div className="container">
        <div className="row">
          {filterProducts.map((item) => {
            return (
              <FoodItem
                key={item.id}
                id={item.id}
                name={item.name}
                price={item.price}
                img={item.img}
                PostCartFunc={PostCartProduct}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu;
