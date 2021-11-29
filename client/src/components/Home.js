import React, { Component } from "react";

class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <br/>
                <div className="jumbotron">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" 
                        href="https://github.com/ShayanShiravani/Pet-Shop.git" role="button">GitHub</a>
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
            </div>
        );
    }
}

export default Home;