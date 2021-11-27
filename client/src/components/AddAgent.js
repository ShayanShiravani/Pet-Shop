import React, { Component } from "react";
import "../css/AddAgent.css";

class AddAgent extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    componentDidUpdate = () => {

    }

    submitForm = (e) => {
        e.preventDefault();
    }

    addAgent = async () => {
        const { accounts, contract } = this.state;

        await contract.methods.set(5).send({ from: accounts[0] });

        const response = await contract.methods.get().call();

        this.setState({ storageValue: response });
    }

    render() {
        return (
            <div className="row add-agent">
                <div className="col-sm-5">
                    <form onSubmit={this.submitForm}>
                        <label htmlFor="agent_address" className="form-label">Agent address</label>
                        <input type="text" className="form-control" id="agent_address" />
                        <input type="submit" className="btn btn-outline-warning btn-block mt-4" value="Add" />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddAgent;