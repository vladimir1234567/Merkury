import React from "react";

import logo from '../img/logo.png';
import logotext from '../img/logotext.png';

import Ul from "./ul.js";
import Header from "./header.js";

import "../style/styles/main-menu.scss";

class MainMenu extends React.Component {
    render(){

        const ulLinks = [

            {
                link: '/home',
                text: 'Home',
                className: 'itemMainMenu'
            },
            {
                link: '/workflow',
                text: 'Workflow',
                className: 'itemMainMenu'
            },
            {
                link: '/statistics',
                text: 'Statistics',
                className: 'itemMainMenu'
            },
            {
                link: '/calendar',
                text: 'Calendar',
                className: 'itemMainMenu'
            },
            {
                link: '/users',
                text: 'Users',
                className: 'itemMainMenu'
            },
            {
                link: '/settings',
                text: 'Settings',
                className: 'itemMainMenu'
            }
        ];
        return (
            <div>
                <section className="mainMenu d-flex">
                    <section className="menu">
                        <h1 className="logo">
                            <a className="brand" href="/home">
                                <img src={logo} width="55" height="55" alt="blue-broun"/>
                                <img src={logotext} width="120" height="35" alt="Merkury"/>

                            </a>
                        </h1>
                        <Ul ololo={ulLinks}/>
                    </section>
                    <section className="page">
                        <Header/>
                    </section>
                </section>
            </div>
        )
    }
}
export default MainMenu;


