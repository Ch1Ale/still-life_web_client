import React from 'react'

import { Carousel} from 'react-bootstrap';

class SlideShow extends React.Component {

    render(){
        return <>
   <Carousel interval={null} indicators="true" onSlid={ ()=>{} } className="mx-4">

  <Carousel.Item>
    <img
      className="img-fluid rounded"
      src="https://images.unsplash.com/photo-1616417811400-04040d7241f8"
      // src="https://images.unsplash.com/photo-1522748906645-95d8adfd52c7"
      alt="Spring picture"
    />
    <Carousel.Caption>
      <h1>Spring</h1>
      <p>Qui possiamo mettere una descr, se vogliamo. augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="img-fluid rounded"
      src="https://images.unsplash.com/photo-1590504425127-1e415bb06444"
      alt="Summer picture"
    />
    <Carousel.Caption>
      <h1>Summer</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="img-fluid rounded"
      src="https://images.unsplash.com/photo-1632177979664-c1bec4eac89f"
      alt="Autumn picture"
    />
    <Carousel.Caption>
      <h1>Autumn</h1>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="img-fluid rounded"
      src="https://images.unsplash.com/photo-1514665840819-e04ee0e24d88"
      alt="Winter picture"
    />
    <Carousel.Caption>
      <h1>Winter</h1>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</>
    }
}

export default SlideShow