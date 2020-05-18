import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderSponsor(sponsor) {
    if (sponsor) {
        return (
        <React.Fragment>
            <Media object src= {sponsor.image} alt={sponsor.name} width="150" />
            <Media body className="ml-5 mb-4">
                <Media heading>{sponsor.name}</Media>
                {sponsor.description}
            </Media>
        </React.Fragment>)
        
    }
    else {
        return <div />
    }
}

function About(props) {
    

    
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem ><Link to="/directory">Directory</Link></BreadcrumbItem>
                        <BreadcrumbItem active>About Us</BreadcrumbItem>
                        <BreadcrumbItem><Link to="/contactus">Contact Us</Link></BreadcrumbItem>
                    </Breadcrumb>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>
            <div className="row row-content">
                <div  className="col-sm-6">
                    <h3>Our Mission</h3>
                    <p>Our mission is to provide doctors and pharmeceutical companies with the best solutions towards tending to the sick, and .</p>
                </div>
                <div className="col-sm-6">
                    <h3>Services</h3>
                    <p>We provide a variety of services. We perform antivenom production, we produce medications with the proper venom properties, and we have a team consisting of medical scientists and doctors with 10+ years of experience. </p>
                </div>
                <div className="col-sm-6">
                    <Card>
                        <CardHeader className="bg-warning text-white"><h3>Facts At a Glance</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-6">Founded</dt>
                                <dd className="col-6">February 3, 2012</dd>
                                <dt className="col-6">No. of Concotions in 2019</dt>
                                <dd className="col-6">300</dd>
                                <dt className="col-6">No. of Reviews in 2019</dt>
                                <dd className="col-6">5000</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">300</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}

export default About;
