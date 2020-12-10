import React from "react";
import Common from "./Common";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <Common
          name="Grow your business with"
          img
          src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          visit="/login"
          btname="Get Started"
        />
      </>
    );
  }
}
