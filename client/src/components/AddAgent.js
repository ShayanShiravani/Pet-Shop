import React, { Component } from "react";

class AddAgent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-8">
                    <form>
                        <label for="agent_address" class="form-label">Agent address</label>
                        <input type="text" class="form-control" id="agent_address" />
                    </form>
                </div>
            </div>
        );
    }
}

export default AddAgent;