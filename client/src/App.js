import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddBranch from "./components/AddBranch";
import Client from "./objects/Client";
import "./css/App.css";
import Header from "./components/Header";
import Home from "./components/Home";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      await Client.init();
      this.setState(
        { 
          web3: Client.web3, 
          accounts: Client.accounts, 
          contract: Client.contracts.PetShop 
        });
        console.log(Client.contracts.PetShop);
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
              <Route exact path="/" element={<Home client={Client} />} />
              <Route exact path="/add-branch" element={<AddBranch client={Client} />} />
            </Routes>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
