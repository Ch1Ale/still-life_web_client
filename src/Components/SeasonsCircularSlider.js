import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import {Card, Image} from "react-bootstrap"

class SeasonCircularSlider extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return <>
        <Card className="text-white mx-auto rounded-circle" style={{ width: '20rem' }}>

            {this.props.selectedSeason >=0 && this.props.selectedSeason <=89 &&     //spring
                <Card.Img as={Image} src={this.props.springImg} alt="Spring image"
                    className='rounded'
                />
            }
            {this.props.selectedSeason >=90 && this.props.selectedSeason <=179 &&   //summer
                <Card.Img as={Image} src={this.props.summerImg} alt="Summer image"
                    className='rounded '
                />
            }
            {this.props.selectedSeason >=180 && this.props.selectedSeason <=269 &&   //autumn
                <Card.Img as={Image} src="https://images.unsplash.com/photo-1632177979664-c1bec4eac89f" alt="Autumn image"
                    className='rounded-circle' style={{opacity: 1}}
                />
            }
            {this.props.selectedSeason >=270 && this.props.selectedSeason <=359 &&   //winter
                <Card.Img as={Image} src="https://images.unsplash.com/photo-1514665840819-e04ee0e24d88" alt="Winter image"
                    className='rounded-circle '
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
