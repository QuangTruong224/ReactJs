import React from "react";
import ProductList from "../../components/ProductList/ProductList";
import { connect } from "react-redux";
import axios from "axios";
import ProductItems from "../../components/ProductItems/ProductItems";
// Tích hợp React-router
class ProductListPage extends React.Component {
  render() {
    // var { products } = this.props;
    axios({
      method: "GET",
      url: "http://localhost:3005/posts",
      data: null,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    var products = [];
    return (
      <div>
        <ProductList>{this.displayProductList(products)}</ProductList>
      </div>
    );
  }
  displayProductList(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItems product={product} key={index} index={index} />;
      });
    }
    return result;
  }
}
const mapStateToProps = (state) => {
  return {
    products: state.products,
    // state.products ở reduce file index
  };
};
export default connect(mapStateToProps, null)(ProductListPage);
