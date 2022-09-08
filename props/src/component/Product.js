import React from "react";
class Product extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.addToCart = this.addToCart.bind(this);
  }

  addToCart() {
    alert(this.props.children + `  giá ${this.props.price}`);
  }
  render() {
    return (
      <div>
        <div className="col-xs-4 col-sm-4">
          <div className="thumbnail">
            <img alt={this.props.children} src={this.props.image}></img>
            <div className="caption">
              <h3>{this.props.children}</h3>
              <p>{this.props.price} VNĐ</p>
              <p>
                <button
                  onClick={this.addToCart}
                  type="submit"
                  className="btn btn-primary"
                >
                  Mua
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
