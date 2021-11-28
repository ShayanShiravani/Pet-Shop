import React, { Component } from "react";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            branchesList: null
        };
    }

    componentDidMount = async () => {
        // await this.props.client.contracts.PetShop.methods
        // .addBranch('0x3B83AeD275216625fbbE8DB71E0478C28f1405F9')
        // .send({ from: this.props.client.activeAccount });

        const response = await this.props.client.contracts.PetShop.methods.getBranches().call();
        console.log(response);
        this.setState({ branchesList: response });
    }

    render() {
        return (
            <div className="row d-flex justify-content-center">
                Welcome to Shayan's Pet Shop
                <div className="branches-list">
                    
                </div>
            </div>
        );
    }
}

export default Home;