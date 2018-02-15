import React, { Component } from 'react';
import "../style/styles/header.scss";
import face from '../img/us-face.jpg';






    class Header extends Component {


    render() {

        return (
            <div className="head">
                <header className="main-header d-flex justify-content-between align-items-center">
                    <div className="site-control">
                        <button className="btn-menu" type="button">
                            <i className="fa fa-bars" />
                        </button>
                        <button className="btn-search" type="button">
                            <i className="fa fa-search" />
                        </button>
                    </div>
                    <div className="user-control d-flex align-items-center">
                        <button className="addProject" type="button">
                            + Add Project
                        </button>
                        <button className="letter" type="button">
                            <i className="fa fa-envelope" />
                        </button>
                        <span className="bell">
                            <i className="fa fa-bell" />
                        </span>
                        <span className="us-face">
                            <img src={face} alt=""/>
                        </span>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;