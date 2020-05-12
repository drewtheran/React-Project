import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import AspectInfo from './AspectInfoComponent';
import { ASPECTS } from '../shared/aspects';
import Header from './HeaderComponent';
import Footer from './FooterComponent';

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
                
                <Header />
                <Directory aspects={this.state.aspects} onClick={aspectId => this.onAspectSelect(aspectId)}/>
                <AspectInfo aspect={this.state.aspects.filter(aspect => aspect.id === this.state.selectedAspect)[0]}/>
                <Footer />
            </div>
        );
    };
}

export default Main;