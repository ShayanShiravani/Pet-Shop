import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
                <a href='/' className="navbar-brand">Home</a>
                <a href='/add-agent' className="navbar-brand">Add agent</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </header>
        );
    }
}

export default Header;