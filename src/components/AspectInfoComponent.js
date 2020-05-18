import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { ASPECTS } from '../shared/aspects';


    function RenderCode(aspect) {
        return (
            <div class="col-md-5 m-1">
                <Card>
                    <CardImg top src={aspect.image} alt={aspect.name} style={{marginTop:'200px'}}/>
                    <CardBody>
                        <CardTitle>{aspect.name}</CardTitle>
                        <CardText>{aspect.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
        return (
            <div>

            </div>
        )
    }
    
    function CodeVenomInfo(props) {
        if (props.aspect) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderCode aspect={props.aspect} />
                    </div>
                </div>
            );
    }
    return <div />
}

    


export default CodeVenomInfo;