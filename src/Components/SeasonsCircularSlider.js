import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';

class SeasonCircularSlider extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return <>
            <CircularSlider max={359}
                knobColor="#005a58"
                progressColorFrom="#00bfbd"
                progressColorTo="#009c9a"
                progressSize={24}
                trackColor="#eeeeee"
                trackSize={24}
                onChange={ (value) => { console.log(value); this.props.sendSeason(value); } }
            />
            {/* <img
                className="img-fluid rounded avatar-big rounded-circle"
                src="https://images.unsplash.com/photo-1616417811400-04040d7241f8"
            /> */}


        </>
    }
}

export default SeasonCircularSlider;
