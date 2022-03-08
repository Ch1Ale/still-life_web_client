import React from 'react';

import { Switch, Route, withRouter } from 'react-router-dom';
import { Container, Button, Row, Col, Card} from 'react-bootstrap';

import NavbarSLO from './NavbarSLO'
import API from "../API/API"
import EmoticonsSlides from './EmoticonsSlides';
import SeasonsCircularSlider from './SeasonsCircularSlider';

const springImgUri = require('../Images/spring_segnata.jpg')
const summerImgUri = require('../Images/summer_segnata.jpg')
const autumnImgUri = require('../Images/autumn_segnata.jpg')
const winterImgUri = require('../Images/winter_segnata.jpg')

let baseSpringBG = "#fad1ea" // 324, 80, 85
  
class Home extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            mood: 0, /* 0 felice, 1 rilassato, 2 triste, 3 arrabiato */
            season: 0, /* 0:89 spring, 90:179 summer, 180:269 autumn, 270:360 winter */
            connected: null,
            remoteOscIp: null,
            remoteOscPort: null,
            springImg: null,
            seasonBG: null,
            summerImg: null,
            summerBG: null,
            seasonName: null
        }
    }

    componentDidMount(){
        this.setState({
            seasonBG: this.hslToHex(324, 80, 96),
            springImg: springImgUri,
            summerImg: summerImgUri,
            autumnImg: autumnImgUri,
            winterImg: winterImgUri,
            seasonName: 'spring'
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
                      seasonBG: this.seasonBgColorAndNameSel(value, null),
                      seasonName: this.seasonBgColorAndNameSel(value, 'name')
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

        //console.log("SCALED "+res)
        return res
    }

    saturationValueScaler = (v) => {
        // 0-89 90-179 x:90 = 1:10
        let res

        v++
        if(v> 94) v-=85
        if(v> 184) v-=175
        if(v> 274) v-=265
        // v %= 85
        // v /= 10
        // res = v * 90
        // res = v % 10

        console.log("SCALED "+v)
        return res
    }

    seasonBgColorAndNameSel = (v, mode) => {

        let baseHue
        let baseSaturation
        let saturationDecrease
        let scalingFactor

        //aggiungere sfumatura biaco tra passaggi di colori
        // scelgo i range a cavallo tra i colori

        if(v <= 89){    //spring
            if(mode === 'name')
                return 'spring'
            else{
                baseHue = 324
                baseSaturation = 90
                scalingFactor = 1
            }
        }
        if(v >= 90 && v <= 179){    //summe
            if(mode === 'name') 
                return 'summer'
            else{
                baseHue = 45
                baseSaturation = 95
                scalingFactor = 1.9
            }
        }
        if(v >= 180 && v <= 269){   //autumn
            if(mode === 'name')
                return 'autumn'
            else{
                baseHue = 19
                baseSaturation = 90
                scalingFactor = 1.5  
            }
        }
        if(v >= 270 && v <= 359){   //winter
            if(mode === 'name')
                return 'winter'
            else{
                baseHue = 185
                baseSaturation = 85
                scalingFactor = 1.8
            }
        }

/*         saturationDecrease = 0;

        if( v>=85 && v<=94){
            saturationDecrease = this.saturationValueScaler(v) * 9
        }

        if(v>=175 && v<= 184){
            saturationDecrease = this.saturationValueScaler(v) * 10
        }

        if(v>=265 && v<=274){
            saturationDecrease = this.saturationValueScaler(v) * 10
        }

        if(v>= 355 && v<= 4){
            saturationDecrease = this.saturationValueScaler(v) * 10
        }

        console.log('SAT decrease: '+saturationDecrease) */

        return this.hslToHex(baseHue, baseSaturation, 90 - (this.seasonValueScaler(this.state.season) * scalingFactor ))
    } 
      

    render(){
        return <>
        <Switch>
            <Route exact path='/home'>
                <NavbarSLO title="Still Life Orchestra"/>
                <Container style={{height: '100vh'}} className='pt-2 pb-5 bg-light' >

                    <Card style={{backgroundColor: this.state.seasonBG }} className='pb-4 mt-2'>
                        <h5 className='mb-2 py-0 mb-0 mt-2'>
                            Change the mood of plants
                        </h5>
                        <SeasonsCircularSlider selectedSeason={this.state.season} sendSeason={this.sendSeason}
                                        springImg={this.state.springImg} summerImg={this.state.summerImg}
                                        autumnImg={this.state.autumnImg} winterImg={this.state.winterImg}
                        />
                    </Card>

                    <Container className='mt-3 pb-4 bg-light'>
                            <h5 className='mt-0 mb-2 pb-0 mb-0'>{'How do you feel in '+this.state.seasonName+'?'} </h5>
                            <EmoticonsSlides selectedMood={this.state.mood} sendMood={this.sendMood}/>
                    </Container>
                </Container>
             </Route>
        </Switch>
        </>
    }
}

export default withRouter(Home);