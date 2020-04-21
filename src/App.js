import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
  }
  
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Code Venom</NavbarBrand>
                </div>
                </Navbar>
                <Directory />
            </div>
        );
    } 
}

export default App;
