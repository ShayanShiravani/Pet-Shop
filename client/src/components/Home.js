import React, { Component } from "react";
import Branch from "./Branch";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            branchesList: null
        };
    }

    componentDidMount = async () => {
        const response = await this.props.client.contracts.PetShop.methods.getBranches().call();
        this.setState({ branchesList: response });
    }

    createBranchesList = (list) => {

    };

    render() {
        if(this.state.branchesList != null)
        {
            const branchAddresses = this.state.branchesList[1];
            var firstColList = branchAddresses.map((address, index) => {
                if(index%2 === 0 && 
                    address !== '0x0000000000000000000000000000000000000000')
                {
                    return <Branch key={index} title="test" address={address}/>;
                }
                return null;
            });
            var secondColList = branchAddresses.map((address, index) => {
                if(index%2 === 1 && 
                    address !== '0x0000000000000000000000000000000000000000')
                {
                    return <Branch key={index} title="test" address={address}/>
                }
                return null;
            });
        }
        return (
            <div>
                <br/>
                <div className="jumbotron">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
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
                {/* <div className="row justify-content-center">
                    <div className="col-md-4">{firstColList}</div>
                    <div className="col-md-4">{secondColList}</div>
                </div> */}
            </div>
        );
    }
}

export default Home;