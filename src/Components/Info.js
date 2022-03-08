import React from 'react';
import { Container, Image } from 'react-bootstrap';

import { Switch, Route, withRouter } from 'react-router-dom';
import NavbarSLO from './NavbarSLO';

const flower = require('../Icons/flower.png')
const sun = require('../Icons/sunny.png')
const leaf = require('../Icons/leaf.png')
const ice = require('../Icons/snow.png')

class Info extends React.Component {
    render(){
    return<>
    <Switch>
        <Route>
        <NavbarSLO title="Help" toBack={true} goback={null}/>
        <Container className='pt-3 text-start'>
            
            <h2 className='ml-0 p-0 mt-2'><strong>Hi, we are Still Life Orchestra</strong></h2>
            <h3 className="mt-4 p-0 mb-0 text-start">This simple app allows you</h3>
            <h3 className="p-0 mb-0 text-start">
                to make plants feel the <strong>season</strong> of your choice
            </h3>
            <h3 className="p-0 mb-0 text-start">
                and let them know your <strong>mood</strong>.
            </h3>

            <h3 className="mt-5 p-0 mb-0 text-start">
                Choose a season by moving the knob over the circle.
            </h3>
                
            <h3 className='my-0'>
                The <Image src={flower} style={{width: '22px'}} className='mb-1'/> indicates the point of maximum <strong>spring</strong>,
            </h3>
            <h3 className='my-0'>
                the <Image src={sun} style={{width: '22px'}} className='mb-1'/> the maximum <strong>summer</strong>,
            </h3>
            <h3 className='my-0'>
                the <Image src={leaf} style={{width: '22px'}} className='mb-1'/> the maximum <strong>autumn</strong>
            </h3>
            <h3 className='my-0'>
                and <Image src={ice} style={{width: '22px'}} className='mb-1'/> the maximum <strong>winter</strong>.
            </h3>

        </Container>
        </Route>
    </Switch>
    </>
    }
}

export default withRouter(Info)