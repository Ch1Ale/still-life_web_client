import React from 'react'

import { Carousel} from 'react-bootstrap';

class SlideShow extends React.Component {

    render(){
        return <>
   <Carousel interval={null} indicators="true" onSlid={ ()=>{} } className="">
  <Carousel.Item>
    <img
      className="d-block mx-auto w-50"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="Happy"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto w-50"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Sad"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto w-50"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</>
    }
}

export default SlideShow