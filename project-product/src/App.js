import "./App.css";
import React from "react";
import Header from "./components/Menu/Header";
import ProductList from "./components/ProductList/ProductList";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <ProductList />
        </div>
      </div>
    );
  }
}
export default App;
