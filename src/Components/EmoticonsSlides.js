import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrin, faFaceFrown, faFaceSadCry, faFaceSurprise} from "@fortawesome/free-regular-svg-icons";

class EmoticonsSlides extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return <>
        <div className="btn-group btn-group-toggle mt-0 px-0" data-toggle="buttons">

            {this.props.selectedMood !== null && this.props.selectedMood === 0 ?
                <button className="btn btn-dark px-3">
                    <FontAwesomeIcon icon={faFaceGrin} className="fa-2x"/>
                </button>
            :
                <button className="btn px-3" onClick={() => { this.props.sendMood(0) }} >
                    <FontAwesomeIcon icon={faFaceGrin} className="fa-2x"/>
                </button>
            }

            {this.props.selectedMood && this.props.selectedMood === 1 ?
                <button className="btn btn-dark px-3">
                    <FontAwesomeIcon icon={faFaceSurprise} className="fa-2x"/>
                </button>
            :
                <button className="btn px-3" onClick={() => { this.props.sendMood(1) }} >
                    <FontAwesomeIcon icon={faFaceSurprise} className="fa-2x"/>
                </button>
            }

            {this.props.selectedMood && this.props.selectedMood === 2 ?
                <button className="btn btn-dark px-3">
                    <FontAwesomeIcon icon={faFaceFrown} className="fa-2x"/>
                </button>
            :
                <button className="btn px-3" onClick={() => { this.props.sendMood(2) }} >
                    <FontAwesomeIcon icon={faFaceFrown} className="fa-2x"/>
                </button>
            }     

            {this.props.selectedMood && this.props.selectedMood === 3 ?
                <button className="btn btn-dark px-3">
                    <FontAwesomeIcon icon={faFaceSadCry} className="fa-2x"/>
                </button>
            :
                <button className="btn px-3" onClick={() => { this.props.sendMood(3) }} >
                    <FontAwesomeIcon icon={faFaceSadCry} className="fa-2x"/>
                </button>
            }      
</div>
        </>
    }
}

export default EmoticonsSlides;