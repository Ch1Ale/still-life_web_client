import React from 'react'
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrin, faFaceFrown, faFaceSadCry, faFaceSurprise} from "@fortawesome/free-regular-svg-icons";

const happy = require('../Icons/smile.png')
const relaxed = require('../Icons/happy.png')
const sad = require('../Icons/sad.png')
const angry = require('../Icons/angry.png')


class EmoticonsSlides extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return <>
        <div className="btn-group btn-group-toggle mt-0 px-0" data-toggle="buttons">

            {this.props.selectedMood !== null && this.props.selectedMood === 0 ? // felice
                <button className="btn btn-dark px-3">
                    <Image src={happy} style={{width: '32px'}}/>
                    <h6 className='pb-0 mb-0'>Happy</h6>
                </button>
            :
                <button className="btn px-3" onClick={() => { this.props.sendMood(0) }} >
                    <Image src={happy} style={{width: '32px'}}/>
                    <h6 className='pb-0 mb-0 text-dark'>Happy</h6>
                </button>
            }

            {this.props.selectedMood && this.props.selectedMood === 1 ? // rilassato 
                <button className="btn btn-dark px-3">
                    <Image src={relaxed} style={{width: '32px'}}/>
                    <h6 className='pb-0 mb-0'>Relaxed</h6>
                </button>
            :
                <button className="btn px-3" onClick={() => { this.props.sendMood(1) }} >
                    <Image src={relaxed} style={{width: '32px'}}/>
                    <h6 className='pb-0 mb-0 text-dark'>Relaxed</h6>
                </button>
            }

            {this.props.selectedMood && this.props.selectedMood === 2 ?  // triste
                <button className="btn btn-dark px-3">
                    <Image src={sad} style={{width: '32px'}}/>
                    <h6 className='pb-0 mb-0'>Sad</h6>
                </button>
            :
                <button className="btn px-3" onClick={() => { this.props.sendMood(2) }} >
                    <Image src={sad} style={{width: '32px'}}/>
                    <h6 className='pb-0 mb-0 text-dark'>Sad</h6>
                </button>
            }     

            {this.props.selectedMood && this.props.selectedMood === 3 ?  // arrabbiato
                <button className="btn btn-dark px-3">
                    <Image src={angry} style={{width: '32px'}}/>
                    <h6 className='pb-0 mb-0'>Angry</h6>
                </button>
            :
                <button className="btn px-3" onClick={() => { this.props.sendMood(3) }} >
                    <Image src={angry} style={{width: '32px'}}/>
                    <h6 className='pb-0 mb-0 text-dark'>Angry</h6>
                </button>
            }      
</div>
        </>
    }
}

export default EmoticonsSlides;