import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedAspect: null
        };
    }

    onAspectSelect(aspect) {
        this.setState({selectedAspect: aspect});
    }

    renderSelectedAspect(aspect) {
        if (aspect) {
            return (
                <Card>
                    <CardImg top src={aspect.image} alt={aspect.name}/>
                    <CardBody>
                        <CardTitle>{aspect.name}</CardTitle>
                        <CardText>{aspect.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />; //this is for if there isn't an aspect to pass through the method--so there is no error returned.
    }

    render() {
        const directory = this.props.aspects.map (aspect => {
            return (
                <div key={aspect.id} className="col-md-5 m-5">
                    <Card onClick={() => this.onAspectSelect(aspect)}>
                        <CardImg width='100%' src={aspect.image} alt={aspect.name} />
                        <CardImgOverlay>
                            <CardTitle>{aspect.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        
        return (
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedAspect(this.state.selectedAspect)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Directory;