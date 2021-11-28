import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddBranch from "./components/AddBranch";
import client from "./objects/client";
import "./css/App.css";
import Header from "./components/Header";
import Home from "./components/Home";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      await client.init();
      this.setState(
        { 
          web3: client.web3, 
          accounts: client.accounts, 
          contract: client.contracts.PetShop 
        });
        console.log(client.contracts.PetShop);
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  render() {
    if (!this.state.web3) {
      return (
        <div>
          Loading Web3, accounts, and contract...
        </div>
      );
    }
    return (
      <div id="full-layout">
        <Header />
        <div className="container-fluid">
          <Router>
            <Routes>
              <Route exact path="/" element={<Home client={client} />} />
              <Route exact path="/add-branch" element={<AddBranch />} />
            </Routes>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
