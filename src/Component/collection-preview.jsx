import React from "react";
import { connect } from "react-redux";
import { addItem } from "./Redux/Cart/cart.actions";
import "./collection-preview.styles.scss";
import { useHistory } from "react-router";


const CollectionPreview = ({ item, addItem }) => {
    console.log(item)
    const history = useHistory()
    return (
        <div className="collection">
            <h1
                className="shopTitle"
                onClick={() => history.push(`/category/${item.id}`)}
            >
                {item.title.toUpperCase()}
            </h1>
            <div className="gridView">
                {item.items
                    .filter((_, idx) => idx < 4)
                    .map((item) => {
                        return (
                            <div key={item.id} className="preview">
                                <div
                                    style={{
                                        backgroundImage: `url(${item.imgUrl})`,
                                    }}
                                    className="previewImg"
                                >
                                    <div className="hiddenArea">
                                        <button
                                            onClick={() => {
                                                return addItem(item);
                                            } }
                                        >
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                                <div className="spanArea">
                                    <span>{item.name}</span>
                                    <span> ₦{item.price}</span>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
export default connect(null, mapDispatchToProps)(CollectionPreview);
