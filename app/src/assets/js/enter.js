import React, { Component } from "react"
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Enterback from '../img/enter.jpg';
import logo from '../img/logo.png';
import logotext from '../img/logotext.png';

class Enter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeTab: '2',
            signUpForm: {
              username: '',
              password: '',
              email: '',
              phoneNumber: ''
            },
          signInForm: {
            username: '',
            password: '',
          },
          signInFormError: false
        };

      this.toggle = this.toggle.bind(this);
      this.collectUserData = this.collectUserData.bind(this);
      this.updateUserData = this.updateUserData.bind(this);
      this.loginUser = this.loginUser.bind(this);
      this.updateLoginData = this.updateLoginData.bind(this);
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

  updateUserData(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      signUpForm: Object.assign(this.state.signUpForm, {
        [name]: value
      })
    });
  }

  collectUserData(event) {
    event.preventDefault();
    localStorage.setItem('userData', JSON.stringify(this.state.signUpForm));
  }

  updateLoginData(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      signInForm: Object.assign(this.state.signInForm, {
        [name]: value
      })
    });
  }

  loginUser(event) {
    event.preventDefault();
        const userData = JSON.parse(localStorage.getItem('userData'));
        const userDataUsername = userData.username;
        const userDataPass = userData.password;

        const { username, password } = this.state.signInForm;
        const { routeProps, setRootUserData } = this.props;

        if (userDataUsername === username && userDataPass === password) {
          setRootUserData(userData);
          routeProps.history.push('/home');
        } else {
            this.setState({ signInFormError: true })
        }
  }

    render(){
        return (
        <div className="wrap-enter">
            <img className="house" src={Enterback} alt="City" />
            <div className="popup">
                <header className="popup-header d-flex justify-content-between align-items-center">
                    <h1 className="logo">
                        <a className="brand" href="/home">
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
                                        <form className="signup-site flex-column" onSubmit={this.collectUserData}>
                                            <ul className="list-data">
                                                <li className="item-data">
                                                    <div className="icon-text"><i className="fa fa-user-o" aria-hidden="true" /></div>
                                                    <input type="text" name="username" placeholder="Username" value={this.state.signUpForm.username} onChange={this.updateUserData}/>
                                                </li>
                                                <li className="item-data">
                                                    <div className="icon-text"><i className="fa fa-lock" aria-hidden="true" /></div>
                                                    <input type="password" name="password" placeholder="Password" value={this.state.signUpForm.password} onChange={this.updateUserData}/>
                                                </li>
                                                <li className="item-data">
                                                    <div className="icon-text"><i className="fa fa-envelope-o" aria-hidden="true" /></div>
                                                    <input type="email" name="email" placeholder="User email" value={this.state.signUpForm.email} onChange={this.updateUserData}/>
                                                </li>
                                                <li className="item-data">
                                                    <div className="icon-text"><i className="fa fa-mobile" aria-hidden="true" /></div>
                                                    <input type="text" name="phoneNumber" placeholder="User Phone" value={this.state.signUpForm.phoneNumber} onChange={this.updateUserData}/>
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

                                        <form name="signInForm" className={`enter-site flex-column ${this.state.signInFormError ? 'bg-danger' : ''}`} onSubmit={this.loginUser}>
                                            <ul className="list-data">
                                                <li className="item-data">
                                                    <div className="icon-text"><i className="fa fa-user-o" aria-hidden="true" /></div>
                                                    <input type="text" name="username" placeholder="Username" value={this.state.signInForm.username} onChange={this.updateLoginData} />
                                                </li>
                                                <li className="item-data">
                                                    <div className="icon-text"><i className="fa fa-lock" aria-hidden="true" /></div>
                                                    <input type="password" name="password" placeholder="Password" value={this.state.signInForm.password} onChange={this.updateLoginData}/>
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