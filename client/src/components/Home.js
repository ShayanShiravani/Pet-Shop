import React, { Component } from "react";
import "../css/Home.css";

class Home extends Component {
    
    render() {
        return (
            <div>
                <br/>
                <div className="jumbotron">
                    <h1 className="display-4">Welcome to Shayan's PetShop</h1>
                    <br/>
                    <h5 className="pet-quote"><q>A dog is the only thing on earth that loves you more than he loves himself.</q>__Josh Billings</h5>
                    <p className="lead">My decentralize PetShop implemented using Ethereum smart contracts</p>
                    <hr className="my-4" />
                    <p>Please feel free to fork it or do whatever you want with it.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" 
                        href="https://github.com/ShayanShiravani/Pet-Shop.git" role="button">GitHub</a>
                    </p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <h3>Column 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        </div>
                        <div className="col-sm-4">
                            <h3>Column 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        </div>
                        <div className="col-sm-4">
                            <h3>Column 3</h3> 
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;