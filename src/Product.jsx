import { NavLink, useParams, useNavigate } from "react-router-dom";
import Pizza1Img from "./images/Pizza/Pizza1.jpg";

import Header from "./component/Header";
import Footer from "./component/Footer";
import ProductData from "./ProductData";
import { useEffect, useState } from "react";

function Product() {
  const url = 'https://foodorderingbackend.adaptable.app';
  const navigate = useNavigate();
  const { productId } = useParams();
  const [selectedProduct, SetSelectedProduct] = useState({});

  useEffect(() => {
    const result = ProductData.find(function (item) {
      return item.id == productId;
    });
    SetSelectedProduct(result);
  }, []);



  //Product Add on Cart
  const PostCartProduct = async (index)=>{
    const pN= ProductData.find((item)=> item.id==index);
    const productName = pN.name;

    const res = await fetch("https://foodorderingbackend.adaptable.app/cart",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        productName
      })
    })

    if (res.status === 201){
      navigate("/cart");
    } else if (res.status === 422){
      navigate("/signin");
    } else{
      navigate("/signin");
    }
  }





  return (
    <>
      <Header />

      <div className="productContainer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 productBox">
              <div className="productImg">
                <img src={selectedProduct.img} alt="" />
              </div>
            </div>
            <div className="col-lg-8 productBox">
              <div className="productContent">
                <p className="category">Product Category</p>
                <h1>{selectedProduct.name}</h1>
                <p>{selectedProduct.desc}</p>
                <h1>${selectedProduct.price}</h1>
                {/* <div className="productQuantity">
                  <h3>3</h3>
                  <a href="#">
                    <i className="fa fa-plus plusIcon"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-minus minusIcon"></i>
                  </a>
                </div> */}

                <button onClick={()=> PostCartProduct(selectedProduct.id)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Product;
