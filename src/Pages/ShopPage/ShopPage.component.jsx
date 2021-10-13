import React from "react";
import ShopData from "../../Component/Api/ShopData";
import CollectionPreview from "../../Component/collection-preview";

const ShopPage = () => {
  return (
    <div>
      {ShopData.map((item) => (
        <CollectionPreview key={item.id} item={item} />
      ))}
    </div>
  );
};
export default ShopPage