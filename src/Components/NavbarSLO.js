import React from 'react';

import { Navbar, Nav, Col, Container, Image} from 'react-bootstrap';
import {Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faCircleLeft} from "@fortawesome/free-regular-svg-icons";

const logo = require('../Icons/still_life_orchestra_logo.png')


const NavbarSLO = (props) => {

    let {title, toBack} = props;

    return <>
        <Navbar expand="lg" className="sticky-top p-0" bg="dark">
            <Container fluid className='py-2'>
                
            {title === "Info" &&
                <Col xs={8} className="mr-4 p-0">
                    <h4 className="tilte-info text-light my-auto">{title}</h4>
                </Col>
            }

            { toBack &&
                <Col xs={{ span: 2}} className="p-0">
                    <Link type="button" className="btn text-light px-1 py-2" to="/home" > 
                        <FontAwesomeIcon icon={faCircleLeft} style={{width: '23px'}} className='fa-2x'/>
                    </Link>
                </Col>
            }

            {title === "Still Life Orchestra" && <>

                <div className='m-0 p-0'/>
                <Image src={logo} className='' style={{width: '130px'}}/>
                <div className='m-0 p-0'/>
                <div className='m-0 p-0'/>
                <div className='m-0 p-0'/>

                {/* <Col xs={8} className="pl-4 p-0">
                    <h3 className="tilte-info text-light my-auto">{title}</h3>
                </Col> */}

                <Col className='' xs={{ span: 2}}>
                    <Link type="button" className="btn px-3 text-light" to="/info"> 
                        <FontAwesomeIcon icon={faCircleQuestion} style={{width: '23px'}} className='fa-2x'/> 
                    </Link>
                </Col>

                </>
            }
            </Container>
        </Navbar>
    </>
}

export default NavbarSLO;