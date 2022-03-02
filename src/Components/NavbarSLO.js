import React from 'react';

import { Navbar, Nav, Col } from 'react-bootstrap';
import {Link } from 'react-router-dom';


const NavbarSLO = (props) => {

    let {title, toBack, goBack} = props;

    return <>
        <Navbar collapseOnSelect expand="lg" className="sticky-top">

        { toBack &&
            <Col xs="auto" className="p-0">
                <Link type="button" className="btn btn-link" to="/home" > {/*onClick={goBack}*/}
                    <i className="fas fa-chevron-left text-light fa-2x"></i> Home
                </Link>
            </Col>
        }

        {title === "Info" &&
            <Col xs={8} className="mr-4 p-0">
                <Navbar.Brand><h4 className="tilte-info my-auto textNav">{title}</h4></Navbar.Brand>
            </Col>
        }

        {title === "Still Life Orchestra" &&
            <Col xs={8} className="mr-4 p-0">
                <Navbar.Brand><h4 className="tilte-info text-light my-auto">{title}</h4></Navbar.Brand>
                <Link type="button" className="btn btn-link" to="/info"> Info </Link>
            </Col>
        }

        </Navbar>
    </>
}

export default NavbarSLO;