import { ReactComponent as Cart } from "./images/icon-cart.svg";
import { useState } from "react";
import { ProductImages } from "./Images";
import minusIcon from "./images/icon-minus.svg";
import plusIcon from "./images/icon-plus.svg";
import previousIcon from "./images/icon-previous.svg";
import nextIcon from "./images/icon-next.svg";

const ProductSection = () => {

  const [currentIndex, setCurrentIndex] = useState(ProductImages[0]);
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrease = () => {
    setCount((prevCount) => prevCount - 1)
  };

  return (
    <div className="ProductSection">
      <div className="image-section">
        <div className="carousel">
            <button className="previousIcon">
              <img
                src={previousIcon}
                alt="previous"
                className="previousIcon-img"
              />
            </button>
            <button className="nextIcon">
              <img src={nextIcon} alt="next" className="nextIcon-img" />
            </button>
        </div>
        <img src={currentIndex} alt="sneakers" className="image" />
        <div className="thumbnails mt-4 d-none d-lg-block">
          {ProductImages.map((img, index) => (
            <img
              style={{
                border:
                  currentIndex === img ? "3px solid hsl(26, 100%, 55%)" : "",
                opacity: currentIndex === img ? "0.4" : "",
              }}
              key={index}
              src={img}
              alt="sneakers"
              className="thumbnail"
              onClick={() => {
                setCurrentIndex(img);
              }}
            />
          ))}
        </div>
      </div>
      <div className="description">
        <h5>SNEAKER COMPANY</h5>
        <h2>Fall Limited Edition Sneakers</h2>
        <p className="description-text">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <div className="price d-flex d-lg-block justify-content-between">
          <p className="discount">
            $125.00 <span>50%</span>
          </p>
          <p className="original-price text-decoration-line-through">$250.00</p>
        </div>
        <div>
          <div className="d-lg-flex">
            <div className="order-quantity">
              <button
                className="border-0 bg-transparent"
                onClick={handleDecrease}
              >
                <img src={minusIcon} alt="remove" className="minus" />
              </button>
              <div className="ms-lg-3 mt-1">
                <small className="fw-bold">{count}</small>
              </div>
              <button
                className="border-0 bg-transparent ms-lg-3"
                onClick={handleIncrease}
              >
                <img src={plusIcon} alt="add" className="plus" />
              </button>
            </div>
            <div>
              <button className="add-btn ms-lg-3">
                <Cart className="cart" />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;

