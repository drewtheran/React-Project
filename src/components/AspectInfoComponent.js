import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import { ASPECTS } from '../shared/aspects';

class CodeVenomInfo extends Component {
    renderCode(aspect) {
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
    renderComments(comments) {
        if (comments) {
            return (
                <div class ="col-md-5 m-1">
                    <h4>"Comments"</h4>
                </div>
            )
            {comments.map(comments => <div key={comments.id}>{comments.name} - {comments.continent}</div>)}
            return (
                <div></div>
            )
        }
    }
    
    render() {
        if (this.props.aspect) {
            return (
                <div className="container">
                    <div className="row">
                    {this.renderAspect(this.props.aspect)}
                    {this.renderComments(this.props.aspect.comments)}
                    </div>
                </div>
            )
        }
        return <div />;
    }
}

export default CodeVenomInfo;