import React, { Component } from "react";
import "../css/Header.css";

class Header extends Component {
    render() {
        return (
            <nav className="nav">
                <div className="container-fluid">
                    <div className="logo">
                        <a href="/">Shayan's Pet-Shop</a>
                    </div>
                    <div id="mainListDiv" className="main_list">
                        <ul className="navlinks">
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li>
                                <form className="form-inline">
                                    <input className="form-control form-control-lg mr-sm-2" type="search"
                                    placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-lg btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </li>
                        </ul>
                    </div>
                    <span className="navTrigger">
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                </div>
            </nav>
        );
    }
}

export default Header;