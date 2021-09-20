import React from "react";
import { withRouter } from "react-router";
import './product.styles.scss'

const Product = ({ product }) => (
 <div className="products">
      <div className="flexView">
    <div key={product.id} className="preview">
      <div
        style={{
          backgroundImage: `url(${product.imgUrl})`,
        }}
        className="previewImg"
      >
        <div className="hiddenArea">
          <button>Add to cart</button>
        </div>
      </div>
      <div className="spanArea">
        <span>{product.name}</span>
        <span>{product.price}</span>
      </div>
    </div>
  </div>
 </div>
);
export default withRouter(Product);
