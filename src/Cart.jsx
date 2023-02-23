import Header from "./component/Header";
import Footer from "./component/Footer";
import { useEffect, useState } from "react";
import CartProduct from "./component/CartProduct";
import ProductData from "./ProductData";
import { useNavigate } from "react-router-dom";

function Cart() {
  const url = 'https://foodorderingbackend.adaptable.app';
  const navigate = useNavigate();
  const [cartProducts, SetCartProducts] = useState([]);
  const [price, SetPrice] = useState(0);
  const [shippingAmount, SetShippingAmount] = useState(0);

  useEffect(() => {
    callCartPage();
  }, []);

  //Delete Product POST Method
  const delCartProduct = async (productName) => {
    try {
      const res = await fetch("/cart", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productName,
        }),
      });

      if (res.status === 201) {
        window.alert("Product Deleted Successfuly");
        callCartPage();
      } else {
        window.alert("Product Failed To Delete");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const callCartPage = async () => {
    try {
      const res = await fetch("/cart", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      const dataProducts = data.products;

      if (res.status === 200) {
        var totalPrice = 0;
        const selectedProducts = dataProducts.map((item) => {
          for (var i = 0; i < ProductData.length; i++) {
            if (item.product == ProductData[i].name) {
              totalPrice = totalPrice + ProductData[i].price;
              return ProductData[i];
            }
          }
        });

        SetPrice(totalPrice);
        SetCartProducts(selectedProducts);

        if (selectedProducts.length == 0) {
          SetShippingAmount(0);
        } else {
          SetShippingAmount(15);
        }
      } else {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      navigate("/signin");
    }
  };

  //Update Price
  const updatePrice = (pri, isIncrement) => {
    if (isIncrement == "true") {
      SetPrice(price + pri);
    } else {
      SetPrice(price - pri);
    }
  };

  return (
    <>
      <Header />

      <div className="cart">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 cartBox">
              <div className="cartProductContainer">
                {cartProducts.map((item) => {
                  return (
                    <CartProduct
                      key={item.id}
                      img={item.img}
                      name={item.name}
                      price={item.price}
                      deleteProduct={delCartProduct}
                      UpdatePrice={updatePrice}
                    />
                  );
                })}
              </div>
            </div>
            <div className="col-lg-4 cartBox">
              <div className="totalAmountContainer">
                <h3>The total amount of</h3>
                <div className="amountRow">
                  <p>Products amount</p>
                  <p>${price}</p>
                </div>
                <div className="amountRow">
                  <p>Shipping amount</p>
                  <p>${shippingAmount}</p>
                </div>
                <hr />
                <div className="amountRow">
                  <h3>The total amount (VAT)</h3>
                  <h3>${price + shippingAmount}</h3>
                </div>
                <button>GO TO CHECKOUT</button>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Cart;
