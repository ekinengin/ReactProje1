import React, { Component } from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo from "./FormDemo";
import FormDemo2 from "./FormDemo2";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [], //tüm productların listelenmesi
    cart: [], //sepet işlemleri
  };

  //parametre olarak product gelecek
  addtocart = (product) => {
    let newcart = this.state.cart;
    var addedItem = newcart.find((c) => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    } else {
      newcart.push({ product: product, quantity: 1 }); //push arraye eleman ekler
    }
    this.setState({ cart: newcart });

    //eklenti alertify.js !!
    alertify.success(product.productName + " Added to cart!!", 1);
  };

  removefromcart = (product) => {
    let newcart = this.state.cart.filter((p) => p.product.id !== product.id);
    this.setState({ cart: newcart });
    alertify.error(product.productName + " Removed from cart!!", 1);
  };

  //getProducts( içi ) içi => fonksiyonun istediği parametre
  //getproducts(categoryId) aslında
  getProducts = (id) => {
    let Url = "http://localhost:3000/products";
    //isdefined
    if (id) {
      Url += "?categoryId=" + id;
    }
    fetch(Url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };

  componentDidMount() {
    this.getProducts();
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  render() {
    let catInfo = { title: "Category List" };
    let productInfo = { title: "Product List" };

    return (
      <div>
        <Container>
          {/* Navi bir navbar ve onu row dan çıkarttık */}
          <Navi
            removefromcart={this.removefromcart}
            cart={this.state.cart}
          ></Navi>
          <Row>
            <Col xs="3">
              <CategoryList
                changeCategory={this.changeCategory}
                currentCategory={this.state.currentCategory}
                info={catInfo}
              ></CategoryList>
            </Col>
            <Col xs="9">

              {/* --Routing-- */}
              {/* Asıl amaç productlisti ana sayfa yapma ve yanlış bir urlde not founda yönlendirme */}
              {/* Switch sıra sıra route lar gezmeye yarar!! */}
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <ProductList
                      {...props}
                      productsprop={this.state.products}
                      currentCategory={this.state.currentCategory}
                      info={productInfo}
                      addtocart={this.addtocart}
                    ></ProductList>
                  )}
                ></Route>

                <Route exact path="/cart" render={(props) => (
                  <CartList
                      {...props}
                      cart= {this.state.cart}
                      removefromcart= { this.removefromcart}
                    ></CartList>
                )} ></Route>

                <Route path="/form" component={FormDemo}>

                </Route>

                <Route path="/form2" component={FormDemo2}>

                </Route>

                <Route component={NotFound}></Route>
              </Switch>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
