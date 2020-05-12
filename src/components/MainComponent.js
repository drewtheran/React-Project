import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import AspectInfo from './AspectInfoComponent';
import { ASPECTS } from '../shared/aspects';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aspects: ASPECTS,
            selectedAspect: null
        };
    }

    onAspectSelect(aspectId) {
        this.setState({selectedAspect: aspectId});
    }

    render() {
        return (
            <div>
                <Navbar dark color="secondary">
                    <div className="container">
                        <NavbarBrand href="/">Code Venom</NavbarBrand>
                    </div>
                </Navbar>
                <Directory aspects={this.state.aspects} onClick={aspectId => this.onAspectSelect(aspectId)}/>
                <AspectInfo aspect={this.state.aspects.filter(aspect => aspect.id === this.state.selectedAspect)[0]}/>
            </div>
        );
    };
}

export default Main;