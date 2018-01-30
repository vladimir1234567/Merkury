import React from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Enterback from '../img/enter.jpg';
import logo from '../img/logo.png';
import logotext from '../img/logotext.png';





class Enter extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render(){
        return (
        <div className="wrap-enter">
            <img className="house" src={Enterback} alt="City" />
            <div className="popup">
                <header className="popup-header d-flex justify-content-between align-items-center">

                    <h1 className="logo">
                        <a className="brand" href="/">
                            <img src={logo} width="78" height="72" alt="blue-broun" />
                            <img src={logotext} width="163" height="40" alt="Merkury"/>

                        </a>
                    </h1>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '1'})}
                            onClick={() => {
                                this.toggle('1');
                            }}
                        >
                            Register
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: this.state.activeTab === '2'})}
                            onClick={() => {
                                this.toggle('2');
                            }}
                        >
                            Login
                        </NavLink>
                    </NavItem>
                </Nav>
                </header>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <Card body>
                                    <div className="popup-signup">
                                        <h2 className="title-signup text-center">Sign <span>up!</span></h2>
                                        <form action="#" className="enter-site flex-column" method="get">
                                            <ul className="list-data">
                                                <li className="item-data">
                                                    <div className="icon-text"><i className="fa fa-user-o" aria-hidden="true" /></div>
                                                    <input type="text" id="yourname" placeholder="Username"/>
                                                </li>
                                                <li className="item-data">
                                                    <div className="icon-text"><i className="fa fa-lock" aria-hidden="true" /></div>
                                                    <input type="password" id="mail" placeholder="Password"/>
                                                </li>
                                                <li className="item-data">
                                                    <div className="icon-text"><i className="fa fa-envelope-o" aria-hidden="true" /></div>
                                                    <input type="email" id="yourmail" placeholder="Usermail" />
                                                </li>
                                                <li className="item-data">
                                                    <div className="icon-text"><i className="fa fa-mobile" aria-hidden="true" /></div>
                                                    <input type="text" id="yourphone" placeholder="Userphone"/>
                                                </li>
                                                <li className="item-data">
                                                    <button type="submit">Sign up<i className="fa fa-chevron-right" aria-hidden="true" /></button>
                                                </li>
                                            </ul>
                                        </form>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                <Card body>
                                    <div className="popup-enter">
                                        <h2 className="title-enter text-center">Welcome <span>back!</span></h2>
                                        <form action="#" className="enter-site flex-column" method="get">
                                            <ul className="list-data">
                                                <li className="item-data">
                                                    <div className="icon-text"><i className="fa fa-user-o" aria-hidden="true" /></div>
                                                    <input type="text" id="yourname" placeholder="Username"/>
                                                </li>
                                                <li className="item-data">
                                                    <div className="icon-text"><i className="fa fa-lock" aria-hidden="true" /></div>
                                                    <input type="password" id="mail" placeholder="Password"/>
                                                </li>
                                                <li className="item-data">
                                                    <button type="submit">Enter<i className="fa fa-chevron-right" aria-hidden="true" /></button>
                                                </li>
                                            </ul>
                                        </form>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        </div>
        )
    }
}
export default Enter;