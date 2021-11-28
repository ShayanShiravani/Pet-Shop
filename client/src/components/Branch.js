import React, { Component } from "react";

class Branch extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="col-sm-6 col-md-4 col-lg-3">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">{this.props.title}</h3>
                        </div>
                        <div class="panel-body">
                            {/* <img alt="140x140" data-src="holder.js/140x140" class="img-rounded img-center" style="width: 100%;" src="https://animalso.com/wp-content/uploads/2017/01/Golden-Retriever_6.jpg" data-holder-rendered="true" /> */}
                            {/* <br/><br/> */}
                            <strong>Address</strong>: <span>{this.props.address}</span><br/>
                            {/* <strong>Age</strong>: <span className="pet-age">3</span><br/>
                            <strong>Location</strong>: <span className="pet-location">Warren, MI</span><br/><br/> */}
                            <button class="btn btn-default" type="button" data-id="0">View details</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Branch;