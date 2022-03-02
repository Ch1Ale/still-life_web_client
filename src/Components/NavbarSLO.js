import React from 'react';

import { Navbar, Nav, Col, Container, Row } from 'react-bootstrap';
import {Link } from 'react-router-dom';


const NavbarSLO = (props) => {

    let {title, toBack, goBack} = props;

    return <>
        <Navbar expand="lg" className="sticky-top" bg="dark">
        <Container fluid className='py-1'>

        {title === "Info" &&
            <Col xs={8} className="mr-4 p-0">
                <h4 className="tilte-info text-light my-auto">{title}</h4>
            </Col>
        }

        { toBack &&
            <Col xs={{ span: 2}} className="p-0">
                <Link type="button" className="btn bg-light p-1" to="/home" > Back </Link>
            </Col>
        }

        {title === "Still Life Orchestra" && <>
            <Col xs={8} className="pl-4 p-0">
                <h3 className="tilte-info text-light my-auto">{title}</h3>
            </Col>
            <Col className='' xs={{ span: 2}}>
                <Link type="button" className="btn bg-light p-1" to="/info"> Info </Link>
            </Col>

            </>
        }
        </Container>

        </Navbar>
    </>
}

export default NavbarSLO;