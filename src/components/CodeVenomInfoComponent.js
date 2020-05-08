import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class CodeVenomInfo extends Component {
    renderCode(aspect) {
        return (
            <div class="col-md-5 m-1">
                <Card>
                    <CardImg top src={aspect.image} alt={aspect.name} style={{marginTop:'200px'}}/>
                    <CardBody>
                        <CardTitle></CardTitle>
                        <CardText></CardText>
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
}

export default CodeVenomInfo;