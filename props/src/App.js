import "./App.css";
import React from "react";
import Product from "./component/Product";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.addProduct = this.addProduct.bind(this);
  }
  addProduct(e) {
    console.log(this.refs.name.value);
  }
  render() {
    var product = [
      {
        id: 1,
        name: "Iphone",
        price: 500000,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFK5Z9gaKyyb5dCsP_kzJcRxHAKIkG-y6KLw&usqp=CAU",
        status: true,
      },
      {
        id: 2,
        name: "Samsung",
        price: 500000,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFK5Z9gaKyyb5dCsP_kzJcRxHAKIkG-y6KLw&usqp=CAU",
        status: true,
      },
      {
        id: 3,
        name: "Xiao mi",
        price: 500000,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFK5Z9gaKyyb5dCsP_kzJcRxHAKIkG-y6KLw&usqp=CAU",
        status: true,
      },
    ];
    let element = product.map((product, i) => {
      let result = "";
      if (product.status === true) {
        result = (
          <Product key={i} price={product.price} image={product.image}>
            {product.name}
          </Product>
        );
      }
      return result;
    });
    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <p className="navbar-brand">Test</p>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="form-group">
                  <label>Tên sản phẩm</label>
                  <input
                    ref="name"
                    type="text"
                    className="form-control"
                  ></input>
                  <button
                    onClick={this.addProduct}
                    type="submit"
                    className="btn btn-primary"
                  >
                    Lưu
                  </button>
                </div>
              </div>
              <div className="col-md-12 col-sm-12 col-md-12 col-lg-12">
                {element}
              </div>
            </div>
            <div className="col-xs-12">
              <button
                onClick={this.addToCart}
                type="button"
                className="btn btn-primary"
              >
                click me
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
