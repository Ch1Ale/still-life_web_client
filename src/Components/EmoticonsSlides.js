import React from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrin, faFaceFrown, faFaceSadCry, faFaceSurprise} from "@fortawesome/free-regular-svg-icons";

class EmoticonsSlides extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return <>
        <div className="btn-group btn-group-toggle mt-0" data-toggle="buttons">

            {this.props.selectedMood !== null && this.props.selectedMood === 0 ?
                <button className="btn btn-secondary">
                    <FontAwesomeIcon icon={faFaceGrin} className="fa2x"/>
                </button>
            :
                <button className="btn btn-outline-dark" onClick={() => { this.props.sendMood(0) }} >
                    <FontAwesomeIcon icon={faFaceGrin} className="fa2x"/>
                </button>
            }

            {this.props.selectedMood && this.props.selectedMood === 1 ?
                <button className="btn btn-secondary">
                    <FontAwesomeIcon icon={faFaceSurprise} className="fa2x"/>
                </button>
            :
                <button className="btn btn-outline-dark" onClick={() => { this.props.sendMood(1) }} >
                    <FontAwesomeIcon icon={faFaceSurprise} className="fa2x"/>
                </button>
            }

            {this.props.selectedMood && this.props.selectedMood === 2 ?
                <button className="btn btn-secondary">
                    <FontAwesomeIcon icon={faFaceFrown} className="fa2x"/>
                </button>
            :
                <button className="btn btn-outline-dark" onClick={() => { this.props.sendMood(2) }} >
                    <FontAwesomeIcon icon={faFaceFrown} className="fa2x"/>
                </button>
            }     

            {this.props.selectedMood && this.props.selectedMood === 3 ?
                <button className="btn btn-secondary">
                    <FontAwesomeIcon icon={faFaceSadCry} className="fa2x"/>
                </button>
            :
                <button className="btn btn-outline-dark" onClick={() => { this.props.sendMood(3) }} >
                    <FontAwesomeIcon icon={faFaceSurprise} className="fa2x"/>
                </button>
            }      
</div>
        </>
    }
}

export default EmoticonsSlides;