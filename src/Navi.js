import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import CartSummary from "./CartSummary";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" expand="md" container="md" fixed="" light>
          <NavbarBrand href="/">Nortwind App</NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/form1">Form 1</Link>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <CartSummary
              removeFromCart={this.props.removeFromCart}
              cart={this.props.cart}
            />
          </Nav>
        </Navbar>
      </div>
    );
  }
}
