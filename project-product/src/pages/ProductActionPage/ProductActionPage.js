import React from "react";

class ProductActionPage extends React.Component {
  render() {
    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label>Tên sản phẩm :</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            ></input>
          </div>
          <div className="form-group">
            <label>Giá sản phẩm</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            ></input>
          </div>

          <div className="form-group">
            <span className="form-label">Trạng thái</span>
            <select className="form-control">
              <option value="Còn hàng">Còn hàng</option>
              <option value="Hết hàng">Hết hàng</option>
            </select>
            <span className="select-arrow"></span>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ProductActionPage;
