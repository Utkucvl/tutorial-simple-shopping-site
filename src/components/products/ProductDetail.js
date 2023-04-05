import React from "react";
import SelectInput from "../toolbox/SelectInput";
import TextInput from "../toolbox/TextInput";

const ProductDetail = ({ categories, product, onSave, onChange }) => {
  return (
    <form onSubmit={onSave}>
      <h2>{product.id ? "Update" : "Save"}</h2>
      <TextInput
        name="ProductName"
        label="Product Name"
        value={product.productName}
        onChange={onChange}
        error="Error"
      ></TextInput>

      <SelectInput
        name="categoryId"
        label="Category"
        value={product.categoryId || ""}
        defaultOption="Choose one"
        options={categories.map((category) => ({
          value: category.id,
          text: category.categoryName,
        }))}
        onChange={onChange}
        error="Error"
      ></SelectInput>

      <TextInput
        name="unitPrice"
        label="Unit Price"
        value={product.unitPrice}
        onChange={onChange}
        error="Error"
      ></TextInput>

      <TextInput
        name="quantityPerUnit"
        label="Quantity Per Unit Name"
        value={product.productName}
        onChange={onChange}
        error="Error"
      ></TextInput>

      <TextInput
        name="unitsInStock"
        label="Units In Stock"
        value={product.unitsInStock}
        onChange={onChange}
        error="Error"
      ></TextInput>

      <button type="submit" className="btn btn-success">
        Save
      </button>
    </form>
  );
};

export default ProductDetail;
