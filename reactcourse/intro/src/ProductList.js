import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {

  render() {
    return (
      <div>
        <h2>
          {this.props.info.title}-{this.props.currentCategory}
        </h2>
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units Stock</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {this.props.productsprop.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td> <Button onClick={()=>this.props.addtocart(product) } color="info">Add To Cart</Button> </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
