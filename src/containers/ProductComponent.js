import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import './style.css'

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);

  // Function to split products into rows with 3 products per row
  const splitProductsIntoRows = (products, productsPerRow) => {
    const rows = [];
    for (let i = 0; i < products.length; i += productsPerRow) {
      const row = products.slice(i, i + productsPerRow);
      rows.push(row);
    }
    return rows;
  };

  const productsInRows = splitProductsIntoRows(products, 3); // Display 3 products per row

  const renderRows = productsInRows.map((row, rowIndex) => (
    <div className="row" key={rowIndex}>
      {row.map((product) => {
        const { id, title, image, price, category } = product;
        return (
          <div className="four wide column" key={id}>
            <Link to={`/product/${id}`}>
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <img src={image} alt={title} />
                  </div>
                  <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">$ {price}</div>
                    <div className="meta">{category}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  ));

  return <>{renderRows}</>;
};

export default ProductComponent;
