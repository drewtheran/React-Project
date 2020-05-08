import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import CodeVenomInfo from './CodeVenomInfoComponent';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const directory = this.props.aspects.map (aspect => {
            return (
                <div key={aspect.id} className="col">
                    <img src={aspect.image} alt={aspect.name} />
                    <h2>{aspect.name}</h2>
                    <p>{aspect.description}</p>
                </div>
            );
        });
        
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        );
    }
}

export default Directory;