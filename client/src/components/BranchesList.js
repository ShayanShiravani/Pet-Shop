import React, { Component } from "react";
import AddBranch from "./AddBranch";
import Branch from "./Branch";

class BranchesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cardsList: null,
            branchesList: null
        };
    }

    componentDidMount = () => {
        this.fetchBranchesList();
    }

    fetchBranchesList = async () => {
        const response = await this.props.client.contracts.PetShop.methods.getBranches().call();
        this.setState({ branchesList: response }, this.createCardsList);
    }

    createCardsList = () => {
        if(this.state.branchesList != null)
        {
            const branchAddresses = this.state.branchesList[1];
            const branchTitles = this.state.branchesList[2];
            var tempList = [];
            var count = 0;
            var i = 0;
            var j = 0;
            var rows = [];
            branchAddresses.map((address, index) => {
                if(address === '0x0000000000000000000000000000000000000000')
                {
                    return false;
                }
                if(count === 3)
                {
                    var newRow = (
                        <div key={j++} className="row m-3">
                            {tempList[0]}
                            {tempList[1]}
                            {tempList[2]}
                        </div>
                    );
                    rows.push(newRow);
                    count = 0;
                    tempList = [];
                }
                if(count < 3)
                {
                    tempList.push(
                        <div key={i++} className="col-md-4">
                            <Branch key={index} title={branchTitles[index]} address={address} 
                            imageSrc="/assets/images/petshop.jpg" />
                        </div>);
                }
                count++;
                return true;
            });
            if(count > 0)
            {
                var newRow = (
                    <div key={j++} className="row m-3">
                        {tempList.map((col) => col)}
                    </div>
                );
                rows.push(newRow);
            }
            var list = rows.map((row) => {
                return row;
            });
            this.setState({
                cardsList: list
            });
        }
    }

    render() {
        return(
            <div className="container-fluid">
                <button type="button" className="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#add_branch">
                    Define branch
                </button>
                <AddBranch client={this.props.client} callBack={this.fetchBranchesList} />
                <div className="container-fluid justify-content-center">
                    {this.state.cardsList}
                </div>
            </div>
        );
    }

}

export default BranchesList;