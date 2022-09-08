import React from "react";
class ProductItems extends React.Component {
  render() {
    return (
      <tr>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
        <td>1</td>
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
