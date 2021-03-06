import React, { Component } from "react";
import "../css/Branch.css";

class Branch extends Component {

    render() {
        return (
            <div className="card">
                <div className="card-header">
                    {this.props.title}
                </div>
                <div className="card-body">
                    <div className="branch-img">
                        <img src={this.props.imageSrc} className="card-img-top" alt="" />
                    </div>
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.address}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted"></small>
                </div>
            </div>
        );
    }
}

export default Branch;