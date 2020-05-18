import React, { Component }  from 'react';
import { Nav, Navbar, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom'

class Header extends Component {
    
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    
    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-2">
                                <h1>Code Venom</h1>
                                <h2>a team meant to find all your pharmaceutical needs</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar dark sticky="top" expand="lg">
                    <div className="container">
                         <NavbarToggler onClick={this.toggleNav} />
                             <Collapse isOpen={this.state.isNavOpen} navbar>
                             <Nav navbar>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/home">
                                                <i className="fa fa-home fa-lg"/>                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/directory">
                                                        <i className="fa fa-list fa-lg"/>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                                <NavLink className="nav-link" to="/aboutus">
                                                    <i className="fa fa-info fa-lg"/> 
                                                </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink className="nav-link" to="/contactus">
                                                <i className="fa fa-address-card fa-lg"/>
                                            </NavLink>
                                        </NavItem>
                                </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;