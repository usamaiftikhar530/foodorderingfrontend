import { useState } from "react";

function CartProduct(props) {
  const [quantity, SetQuantity] = useState(1);

  const plusQuantity = ()=> {
    SetQuantity(quantity+1);
    props.UpdatePrice(props.price,"true");
  }

  const minusQuantity = ()=>{
    if(quantity > 1){
      SetQuantity(quantity-1);
      props.UpdatePrice(props.price,"false");
    }
  }


  return (
    <div className="cartProductBox">
      <div className="cartImg">
        <img src={props.img} alt="" />
      </div>
      <h4>{props.name}</h4>
      <button onClick={()=> props.deleteProduct(props.name)}>Remove</button>
      <h3 className="priceTag">${props.price}</h3>
      <h3 className="discountPrice">${props.price + 10}</h3>
      <div className="productQuantity cartQuantity">
        <h3>{quantity}</h3>
        <a onClick={plusQuantity}>
          <i className="fa fa-plus plusIcon"></i>
        </a>
        <a onClick={minusQuantity}>
          <i className="fa fa-minus minusIcon"></i>
        </a>
      </div>
    </div>
  );
}

export default CartProduct;
