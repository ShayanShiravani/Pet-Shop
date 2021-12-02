import React, { Component } from "react";
import "../css/AddBranch.css";
import Common from "../objects/Common";

class AddBranch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            branchAddress: '',
            branchTitle: ''
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
        this.addBranch(this.state.branchAddress, this.state.branchTitle);
        return false;
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    addBranch = async (address, title) => {
        if(address.trim() === '')
        {
            alert("Please enter an account address");
            return false;
        }
        if(Common.isEmpty(title))
        {
            alert("Please enter a title");
            return false;
        }
        await this.props.client.contracts.PetShop.methods.addBranch(address, title)
        .send({ from: this.props.client.activeAccount });
        this.props.callBack();
    }

    render() {
        return (
            <div className="modal fade" id="add_branch" tabIndex="-1" role="dialog" aria-labelledby="add_branch_label" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="add_branch_label">Define branch</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form id="add_branch_form" noValidate onSubmit={this.submitForm}>
                            <label htmlFor="branch_address" className="form-label">address</label>
                            <input type="text" name="branchAddress" className="form-control form-control-lg" id="branch_address" value={this.state.branchAddress} onChange={this.handleChange} />
                            <label htmlFor="branch_title" className="form-label">title</label>
                            <input type="text" name="branchTitle" className="form-control form-control-lg" id="branch_title" value={this.state.branchTitle} onChange={this.handleChange} />
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <input form="add_branch_form" type="submit" className="btn btn-primary" 
                        value="Save changes" />
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddBranch;