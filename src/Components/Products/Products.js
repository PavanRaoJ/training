import React, { useEffect } from "react";
import "./Products.css";
import axios from "axios";

import DefaultImage from "../../Utils/Images/Img1.jpg";

const Product = (props) => {
  const [data, setData] = React.useState([]);
  const [currentIndex, setcurrentIndex] = React.useState(0);

  useEffect(() => {
    console.log("component getting mounted");
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    var downloadOptions = {
      method: "GET",
      url: `${process.env.REACT_APP_API}/Products/`,
    };
    const request = axios(downloadOptions);

    request.then(({ data }) => {
      setData(data);
    });
  };

  const handleEditProduct = (product_details) => {
    alert("here");
    console.log(product_details);
  };

  const handleCard = (index) => {
    setcurrentIndex(index);
  };
  return (
    <div>
      <div className="Products-Home-Wrap">
        <span className="product-list-title">
          The list of our <strong>PRODUCTS </strong>{" "}
        </span>
        {data.length === 0 ? (
          <div href="#" className="icon">
            Sorry No Products Available!
          </div>
        ) : (
          <div>
            <div href="#" className="icon">
              <img
                src={
                  data[currentIndex].imageUrl !== ""
                    ? `${process.env.REACT_APP_API}/${data[currentIndex].imageUrl}`
                    : DefaultImage
                }
              ></img>
              <div> {data[currentIndex].title} </div>
              <div> ₹ {data[currentIndex].price} </div>
            </div>
            <div className="Product-Edit-btn">
              <button
                onClick={() => {
                  handleEditProduct(data[currentIndex]);
                }}
              >
                Edit
              </button>
              <button>Delete</button>
            </div>
          </div>
        )}

        <div href="#" className="icon">
          ADD NEW PRODUCT
        </div>
      </div>
      <div>
        {data.length !== 0 ? (
          <div className="Pagination-wrap">
            {data.map((elem, index) => (
              <button
                onClick={() => {
                  handleCard(index);
                }}
                className={`Pagination ${
                  currentIndex === index ? "Active" : ""
                }`}
              >
                {index}
              </button>
            ))}
          </div>
        ) : (
          "No Products Available"
        )}
      </div>
    </div>
  );
};

export default Product;
