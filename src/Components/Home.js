import React from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';
import { Container, Button, Row, Col} from 'react-bootstrap';

import NavbarSLO from './NavbarSLO'
import MyChart from './MyChart';
import API from "../API/API"

class Home extends React.Component {

    componentDidMount(){
    }

    sendMood = (value) => {
        API.sendNewMood(value);
    }

    render(){
        return <>
        <Switch>
            <Route exact path='/home'>
                <NavbarSLO title="Still Life Orchestra"/>
                <Container>
                    <h2 className='mt-3 pb-0 mb-0'>Current moods</h2>
                    <MyChart/>
                    <Row className='mx-4 pt-0 mt-0'>
                        <Button variant="info" size="lg" className='my-2' onClick={() => { this.sendMood(4) }} >Inverno</Button>
                        <Button variant="secondary" size="lg">Autunno</Button>
                    </Row>
                    <Row className='mx-4'>
                        <Button variant="warning" size="lg" className='my-2'>Estate</Button>
                        <Button variant="success" size="lg">Primavera</Button>
                    </Row>

                </Container>
             </Route>
        </Switch>
        </>
    }
}

export default withRouter(Home);