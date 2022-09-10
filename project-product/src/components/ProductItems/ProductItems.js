import React from "react";
class ProductItems extends React.Component {
  render() {
    var { product, index } = this.props;
    var statusName = product.status ? "Còn hàng" : "Hết hàng";
    var statuClass = product.status ? "warning" : "default";
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td className={`${statuClass}`}>{statusName}</td>
        <td>
          <button
            className="btn btn-danger"
            data-target="#deleteModal"
            data-toggle="modal"
          >
            Delete
          </button>
        </td>
        <td>
          <a href="/#">
            <button className="btn btn-info">Update</button>
          </a>
        </td>
      </tr>
    );
  }
}
export default ProductItems;
