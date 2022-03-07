import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import {Card, Image, Modal} from "react-bootstrap"

class SeasonCircularSlider extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return <>
        <Card className="text-white mx-auto" style={{ width: '20rem' }}>

            {   //spring
                <Card.Img as={Image} src={this.props.springImg} alt="Spring image"
                    className={(this.props.selectedSeason >=0 && this.props.selectedSeason <=89) ? 'fadeIn rounded img-fluid' : 'fadeOut rounded'}
                />
            }
            {    //summer
                <Card.Img as={Image} src={this.props.summerImg} alt="Summer image"
                    className={(this.props.selectedSeason >=90 && this.props.selectedSeason <=179) ? 'fadeIn rounded img-fluid' : 'fadeOut rounded'}
                />
            }
            {   //autumn
                <Card.Img as={Image} src={this.props.autumnImg}alt="Autumn image"
                    className={(this.props.selectedSeason >=180 && this.props.selectedSeason <=269) ? 'fadeIn rounded img-fluid' : 'fadeOut rounded' }
                />
            }
            { //winter
                <Card.Img as={Image} src={this.props.winterImg} alt="Winter image"
                    className={(this.props.selectedSeason >=270 && this.props.selectedSeason <=359) ? 'fadeIn rounded img-fluid' : 'fadeOut rounded'}
                />
            }

            <Card.ImgOverlay className='p-0 m-0 mt-3'>
            <CircularSlider
                max={359}
                knobColor="#005a58"
                progressColorFrom="#00bfbd"
                progressColorTo="#009c9a"
                progressSize={22}
                trackColor="#eeeeee"
                trackSize={22}
                label=""
                onChange={ (value) => {this.props.sendSeason(value) } }
            />
            </Card.ImgOverlay>
        </Card>
        </>
    }
}

export default SeasonCircularSlider;
