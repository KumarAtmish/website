import React from "react";
import "./index.css";
import Common from "./Common";

export default class About extends React.Component {
  render() {
    return (
      <>
        <Common
          name="Welcome to About page"
          img
          src="https://images.pexels.com/photos/459654/pexels-photo-459654.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          visit="/contact"
          btname="Contact Now"
        />
      </>
    );
  }
}
