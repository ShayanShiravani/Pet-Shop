import React, { Component } from "react";
import "../css/AddBranch.css";
import Common from "../objects/Common";

class AddBranch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            branchAddress: '',
        };
    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    componentDidUpdate = () => {

    }

    submitForm = (e) => {
        e.preventDefault();
        this.addBranch(this.state.branchAddress);
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    addBranch = async (address) => {
        // if(Common.isEmpty(address, true))
        // {
        //     alert("Please enter a valid address");
        //     return false;
        // }
        await this.props.client.contracts.PetShop.methods.addBranch(address)
        .send({ from: this.props.client.activeAccount });
    }

    render() {
        return (
            <div className="row add-branch">
                <div className="col-sm-5">
                    <form noValidate onSubmit={this.submitForm}>
                        <label htmlFor="branch_address" className="form-label">Branch address</label>
                        <input type="text" name="branchAddress" className="form-control form-control-lg" id="branch_address" value={this.state.branchAddress} onChange={this.handleChange} />
                        <input type="submit" className="btn btn-lg btn-outline-warning btn-block mt-4" value="Add" />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddBranch;