import React from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';
import { Container, Button, Row, Col} from 'react-bootstrap';

import NavbarSLO from './NavbarSLO'
import API from "../API/API"
import SlideShow from './SlideShow';
import EmoticonsSlides from './EmoticonsSlides';
import SeasonsCircularSlider from './SeasonsCircularSlider';

class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            mood: 0, /* 0 smile, 1 surprise, 2 frown, 3 sad */
            season: 0, /* 0:89 spring, 90:179 summer, 180:269 autumn, 270:360 winter */
            connected: null,
            remoteOscIp: null,
            remoteOscPort: null
        }
    }

    componentDidMount(){
    }

    sendMood = (value) => {
        this.setState({mood: value}, () => {
            API.sendNewMood(value);
        })
    }

    sendSeason = (value) => {
        this.setState({season: value}, () => {
            API.sendNewSeason(value);
        })
    }

    render(){
        return <>
        <Switch>
            <Route exact path='/home'>
                <NavbarSLO title="Still Life Orchestra"/>
                <Container>

                    <h5 className='mt-5 mb-3 pb-0 mb-0'>Change the mood of plants</h5>
                    {/* <SlideShow/> */}
                    <SeasonsCircularSlider selectedSeason={this.state.season} sendSeason={this.sendSeason}/>

                    <h5 className='mt-5 mb-3 pb-0 mb-0'>Live your mood</h5>
                    <EmoticonsSlides selectedMood={this.state.mood} sendMood={this.sendMood}/>

                </Container>
             </Route>
        </Switch>
        </>
    }
}

export default withRouter(Home);