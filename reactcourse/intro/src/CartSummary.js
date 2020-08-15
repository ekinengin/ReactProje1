import React, { Component } from "react";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

//Burada farklılık olarak şöyle birşey yaptık rendersummary adında fonkisyonun
//içine ana html imizi yazdık render-retunr içinde bu fonksiyonu çağırdık

export default class CartSummary extends Component {
  rendersummary = () => {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          <i>Cart Items</i> - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((cartitem) => (
            <DropdownItem key={cartitem.product.id}>
             <Badge color="danger" onClick= {()=>this.props.removefromcart(cartitem.product)}>Sil</Badge> - {cartitem.product.productName} -{" "}
              <Badge color="success">{cartitem.quantity}</Badge>
            </DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to="cart">
            Go to Cart
            </Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  };

  renderemptycart = () => {
    return (
      <NavItem>
        <NavLink><i>Empty Cart</i></NavLink>
      </NavItem>
    );
  };

  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.rendersummary() : this.renderemptycart()}
      </div>
    );
  }
}
