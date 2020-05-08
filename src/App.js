import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './components/DirectoryComponent';
import './App.css';
import { ASPECTS } from './shared/aspects';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aspects: ASPECTS
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
                <Directory aspects={this.state.aspects} />
            </div>
        );
    } 
}

export default App;
