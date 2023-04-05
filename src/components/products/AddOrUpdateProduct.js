import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { saveProduct } from "../../redux/actions/productActions";
import { getProducts } from "../../redux/actions/productActions";
import { getCategories } from "../../redux/actions/categoryActions";
import ProductDetail from "./ProductDetail";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";





 function AddOrUpdateProduct({
  products,
  categories,
  getProducts,
  getCategories,
  saveProduct,
  history,
  ...props
}) {
 let {productId} = useParams();
  
  

  const [product, setProduct] = useState({ ...props.product });
  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
    setProduct({ ...props.product });
  }, [props.product]);

  function handleChange(event) {
    const { name, value } = event.target;
    setProduct((previousProduct) => ({
      ...previousProduct,
      [name]: name === "categoryId" ? parseInt(value, 10) : value,
    }));
  }

  function handleSave(event) {
    event.preventDefault();
    saveProduct(product).then(() => {
      history.push("/");
    });
  }
  
  return (
    <ProductDetail
      product={product}
      categories={categories}
      onChange={handleChange}
      onSave={handleSave}
    ></ProductDetail>
  );
  
}

export function getProductById(products, productId) {
  
  let product = products.find((product) => product.id == productId) || null;
  return product;
}

function mapStateToProps(state) {
  const productId = this.productId;
  const product =
    productId && state.productListReducer.length > 0
      ? getProductById(state.productListReducer, productId)
      : {};
  return {
    product,
    products: state.productListReducer,
    categories: state.categoryListReducer,
  };
}
const mapDispatchToProps = {
  getCategories,
  getProducts,
  saveProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct) ;

