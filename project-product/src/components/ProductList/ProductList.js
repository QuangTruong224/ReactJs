import React from "react";
class ProductList extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2>List Product</h2>
          <h2>
            <a href="/#">
              <button className="btn btn-primary">Create New Product</button>
            </a>
          </h2>

          <p className="mt-3">Searching Product </p>
          <div className="form-inline my-lg-3">
            <div className="row">
              <div className="col">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Name"
                  aria-label="Search"
                  name="keySearch1"
                  id="keySearch1"
                ></input>
              </div>
              <div className="col">
                <input
                  className="form-control mr-sm-2"
                  type="search"
                  placeholder="Phone"
                  aria-label="Search"
                  name="keySearch2"
                  id="keySearch2"
                ></input>
              </div>

              <div className="col">
                <select
                  name="customerType"
                  className="form-control"
                  id="keySearch3"
                >
                  <option value="">Select customerType</option>
                  <option value="Diamond"> Diamond</option>
                </select>
              </div>
            </div>
            <div className="col">
              <button
                className="btn btn-outline-success my-2 my-sm-7"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
          <table id="tableStudent" className="table table-bordered table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Mã</th>
                <th scope="col">Tên</th>
                <th scope="col">Giá</th>
                <th scope="col">Trạng thái</th>
                <th scope="col">Xóa</th>
                <th scope="col">Sửa</th>
              </tr>
            </thead>
            <tbody>{this.props.children}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default ProductList;
