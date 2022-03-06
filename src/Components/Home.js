import React from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';
import { Container, Button, Row, Col, Card} from 'react-bootstrap';

import NavbarSLO from './NavbarSLO'
import API from "../API/API"
import SlideShow from './SlideShow';
import EmoticonsSlides from './EmoticonsSlides';
import SeasonsCircularSlider from './SeasonsCircularSlider';

const springImgUri = require('../Images/rovshan-allahverdiyev-WyZ7JykyU4c-unsplash.jpg')
const summerImgUri = require('../Images/bill-hamway-m9ruwyhzYlE-unsplash.jpg')
const autumnImgUri = require('../Images/kiyomi-shiomura-RgYIxvBLnKc-unsplash.jpg')
const winterImgUri = require('../Images/kiyomi-shiomura-RgYIxvBLnKc-unsplash.jpg')

let baseSpringBG = "#fad1ea" // 324, 80, 85
  
class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            mood: 0, /* 0 smile, 1 surprise, 2 frown, 3 sad */
            season: 0, /* 0:89 spring, 90:179 summer, 180:269 autumn, 270:360 winter */
            connected: null,
            remoteOscIp: null,
            remoteOscPort: null,
            springImg: null,
            seasonBG: null,
            summerImg: null,
            summerBG: null
        }
    }

    componentDidMount(){
        this.setState({
            seasonBG: this.hslToHex(324, 80, 96),
            springImg: springImgUri,
            summerImg: summerImgUri
        })
    }

    componentDidUpdate(prevProps){
        if (this.props && this.props.songs
            && prevProps.season !== this.props.season)
            {
                /* this.setState({
                    springBG: this.hslToHex(324, 80, 96-this.seasonValueScaler(this.state.season))
                }) */
            }
    }

    sendMood = (value) => {
        this.setState({mood: value}, () => {
            API.sendNewMood(value);
        })
    }

    sendSeason = (value) => {
        this.setState({season: value, 
                      seasonBG: this.seasonBgColorSel(value)
            }, () => {
                API.sendNewSeason(value)
                //console.log("BBGG : "+this.state.seasonBG)
        })
    }

    hslToHex = (h, s, l)  => {
        l /= 100;
        const a = s * Math.min(l, 1 - l) / 100;
        const f = n => {
          const k = (n + h / 30) % 12;
          const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
          return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
        };
        return `#${f(0)}${f(8)}${f(4)}`;
    }

    seasonValueScaler = (v) => {
        // 0-89 90-179 x:90 = 1:10
        let res

        v++
        v %= 90
        v /= 10
        res = v * 90
        res = v % 10

        console.log("SCALED "+res)
        return res
    }

    seasonBgColorSel = (v) => {

        let baseHue
        let baseSaturation
        let scalingFactor

        if(v <= 89){    //spring
            baseHue = 324
            baseSaturation = 96
            scalingFactor = 1
        }
        if(v >= 90 && v <= 179){    //summer
            baseHue = 54
            baseSaturation = 100
            scalingFactor = 1.8
        }
        if(v >= 180 && v <= 269){   //autumn
            baseHue = 19
            baseSaturation = 96
            scalingFactor = 1
        }
        if(v >= 270 && v <= 359){   //winter
            baseHue = 195
            baseSaturation = 91
            scalingFactor = 1.6
        }
        return this.hslToHex(baseHue, baseSaturation, 96 - (this.seasonValueScaler(this.state.season) * scalingFactor ))
    } 
      

    render(){
        return <>
        <Switch>
            <Route exact path='/home'>
                <NavbarSLO title="Still Life Orchestra"/>
                <Container style={{backgroundColor: this.state.seasonBG}} className='pt-5 pb-5' >

                    <h5 className='mb-3 py-0 mb-0'>Change the mood of plants</h5>
                    {/* <SlideShow/> */}
                    <SeasonsCircularSlider selectedSeason={this.state.season} sendSeason={this.sendSeason}
                                        springImg={this.state.springImg} summerImg={this.state.summerImg}
                    />

                <Card className='p-3 px-4 mx-3 mt-3 pb-4' style={{backgroundColor: '#ffffff', opacity: 1}}>
                    <h5 className='mt-0 mb-3 pb-0 mb-0'>Live your mood</h5>
                    <EmoticonsSlides selectedMood={this.state.mood} sendMood={this.sendMood}/>
                </Card>

                </Container>
             </Route>
        </Switch>
        </>
    }
}

export default withRouter(Home);