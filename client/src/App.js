import React, { Component } from "react";
import PetShopContract from "./contracts/PetShop.json";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import getWeb3 from "./getWeb3";
import AddAgent from "./components/AddAgent";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      const web3 = await getWeb3();

      const accounts = await web3.eth.getAccounts();

      const networkId = await web3.eth.net.getId();
      const deployedNetwork = PetShopContract.networks[networkId];
      if(!deployedNetwork)
      {
        alert("Please select the correct network");
        return false;
      }
      const instance = new web3.eth.Contract(
        PetShopContract.abi,
        deployedNetwork && deployedNetwork.address,
      );
      this.setState({ web3, accounts, contract: instance }, this.runExample);
    } catch (error) {
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    // const { accounts, contract } = this.state;

    // await contract.methods.set(5).send({ from: accounts[0] });

    // const response = await contract.methods.get().call();

    // this.setState({ storageValue: response });
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<AddAgent />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
