import React, { Component } from "react";
import "../css/Home.css";

class Home extends Component {

    render() {
        return (
            <div>
                <div className="jumbotron">
                    <h1 className="display-4">PETSHOP PROTOCOL</h1>
                    <br/>
                    <h5 className="pet-quote"><q>A dog is the only thing on earth that loves you more than he loves himself.</q>__Josh Billings</h5>
                    <p className="lead">My decentralize PetShop implemented using Ethereum smart contracts</p>
                    <hr className="my-4" />
                    <p>Please feel free to fork it or do whatever you want with it.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" 
                        href="https://github.com/ShayanShiravani/Pet-Shop.git" rel="noopener noreferrer" target="_blank" role="button">GitHub »</a>
                    </p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <h3>Branches</h3>
                            <p>
                                10 branches can be defined.<br/>
                                Only owner of PetShop can define a branch
                            </p>
                            <p>
                                The ERC-20 Token PET enables branches to do their activities.
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <h3>Pets</h3>
                            <p>Each branch can sell or adopt a pet</p>
                            <p>The pet's information will store in the Ethereum blockchain</p>
                        </div>
                        <div className="col-sm-4">
                            <h3>Users</h3> 
                            <p>Every customer can pay for a pet and buy it</p>
                            <p>The fee must be paid in ETH</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;