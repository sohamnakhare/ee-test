import React, { Fragment } from "react";
import { Row, Col } from "antd";
import ProductCard from "../../components/ProductCard";

const Products = ({ products }) => {
  return (
    <Fragment>
      <Row gutter={16}>
        {products.map(product => (
          <Col sm={24} md={8} lg={6} xl={6}>
            <ProductCard
              productName={product.name}
              price={product.price}
              units={product.units}
            />
          </Col>
        ))}
      </Row>
    </Fragment>
  );
};

Products.defaultProps = {
  products: []
};

export default Products;
