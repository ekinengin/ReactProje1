import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class CartList extends Component {
  renderCart = () => {
    return (

    // CartList Yeni Sayfa
    
      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>CategoryId</th>
            <th>ProductName</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Quantity</th>
            <th>  </th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((cartItem) => (
            <tr key={cartItem.product.id}>
              <th scope="row">{cartItem.product.id}</th>
              <td>{cartItem.product.categoryId}</td>
              <td>{cartItem.product.productName}</td>
              <td>{cartItem.product.unitPrice}</td>
              <td>{cartItem.product.unitsInStock}</td>
              <td>{cartItem.product.quantity}</td>
              <td> <Button onClick={()=>this.props.removefromcart(cartItem.product) } color="danger">Remove</Button> </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };

  render() {
    return <div>{this.renderCart()}</div>;
  }
}
