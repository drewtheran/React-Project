import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Directory from './DirectoryComponent';
import AspectInfo from './AspectInfoComponent';
import { ASPECTS } from '../shared/aspects';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { SPONSORS } from '../shared/sponsors';
import { PROMOTIONS } from '../shared/promotions';
import Contact from './ContactComponent';
import About from './AboutComponent';
import Home from './HomeComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        aspects: state.aspects,
        sponsors: state.sponsors,
        promotions: state.promotions
    };
};



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            aspects: ASPECTS,
            sponsors: SPONSORS,
            promotions: PROMOTIONS
        };
    }


    render() {
        const HomePage = () => {
            return (
                <Home 
                    aspect={this.state.aspects.filter(aspect => aspect.featured)[0]}
                    promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                    sponsor={this.state.sponsors.filter(sponsor => sponsor.featured)[0]}
                />
            );
        }

        const AspectWithId = ({match}) => {
            return (
                <AspectInfo 
                    aspect={this.state.aspects.filter(aspect => aspect.id === +match.params.aspectId)[0]}
                />
            );
        }; 

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />

                    <Route exact path='/directory' render={() => <Directory aspects={this.state.aspects} />} />

                    <Route path='/directory/:aspectId' component={AspectWithId} />

                    <Route exact path='/aboutus' render={() => <About sponsors={this.state.sponsors} /> }/>

                    <Route exact path='/contactus' component={Contact} />

                    <Redirect to='/home'/>
                </Switch>
                <Footer />
            </div>
        );
    }
};

export default Main;