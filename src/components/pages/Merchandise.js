import React from "react";

function Shop(props) {
  return (
    <div className="shop">
      <div>
        <h2 className="m-3">Shop</h2>
      </div>
      <div>
        <p>
          Purchase one of kind Arizona Spurs merchandise while supplies last.
          Contact us at{" "}
          <a href="mailto:arizonaspurs@gmail.com">arizonaspurs@gmail.com</a> to
          make a purchase. We currently only accept payment through PayPal.
        </p>
      </div>
      <div>
        <img src="https://via.placeholder.com/150" alt=""></img>
        <h3>Scarves</h3>
        <p>
          Inspired after the supporter wall at Tottenham Stadium, this double
          sided scarf features the Arizona Spurs logo and club slogan on each
          end. The scarf is printed on light, breathable material perfect for
          those Arizona summers.
        </p>
      </div>
      <div>
        <img src="https://via.placeholder.com/150" alt=""></img>
        <h3>T-Shirts</h3>
        <p>
          Short sleeve t-shirt featuring the Arizona Spurs logo on the front,
          and the club slogan printed on the back. T-shirts are printed on super
          soft 60% cotton 40% polyester blend material.
        </p>
      </div>
      <div>
        <img src="https://via.placeholder.com/150" alt=""></img>
        <h3>Ornaments</h3>
        <p>
          Make your holiday complete with an Arizona Spurs ornament featuring
          our classic logo.
        </p>
      </div>
    </div>
  );
}

export default Shop;
