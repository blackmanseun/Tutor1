import React from "react";
import { withRouter } from "react-router";
import './product.styles.scss'
import { connect } from "react-redux"
import { addItem } from "../Redux/Cart/cart.actions";

const Product = ({ product, addItem }) => (
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
          <button onClick={()=>{
            return addItem(product)
          }}>Add to cart</button>
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
const mapDispatchToProps =(dispatch) =>({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps )(withRouter(Product));
