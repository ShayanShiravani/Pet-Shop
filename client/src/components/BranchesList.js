import React, { Component } from "react";
import Branch from "./Branch";

class BranchesList extends Component {

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
        return(
            <div className="row justify-content-center">
                <div className="col-md-4">{firstColList}</div>
                <div className="col-md-4">{secondColList}</div>
            </div>
        );
    }

}

export default BranchesList;