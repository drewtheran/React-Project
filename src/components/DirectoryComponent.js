import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDirectoryItem({aspect, onClick}) {
    return (
        <Card>
            <CardImg width="100%" src={aspect.image} alt={aspect.name} />
            <CardImgOverlay>
                <CardTitle>{aspect.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    );
}

function Directory(props) {

    const directory = props.aspects.map(aspect => {
        return (
            <div key={aspect.id} className="col-md-5 m-1">
                <RenderDirectoryItem aspect={aspect}/>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                        <BreadcrumbItem><Link to="/aboutus">About Us</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to="/contactus">Contact Us</Link></BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;