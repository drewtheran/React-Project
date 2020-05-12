import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import AspectInfo from './AspectInfoComponent';
import { ASPECTS } from '../shared/aspects';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent'
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aspects: ASPECTS
        };
    }

    onAspectSelect(aspectId) {
        this.setState({selectedAspect: aspectId});
    }

    render() {

        const HomePage = () => {
            return (
                <Home />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <Directory aspects={this.state.aspects} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Redirect to='/home'/>
                </Switch>
                <Directory aspects={this.state.aspects} onClick={aspectId => this.onAspectSelect(aspectId)}/>
                <AspectInfo aspect={this.state.aspects.filter(aspect => aspect.id === this.state.selectedAspect)[0]}/>
                <Footer />
            </div>
        );
    };
}

export default Main;