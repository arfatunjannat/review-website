import React from 'react';
import {Card, Col} from 'react-bootstrap'

const Mainhome = (props) => {

    const {servicePrice , picture, service }=props.home
    return (

        
        <div>
        
            <Col>
      <Card>
        <Card.Img variant="top w-100  img-fluid" src={picture} />
        <Card.Body>
          <h3>service:{service}</h3>
          <h2>servicePrice:{servicePrice}</h2>
            
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Mainhome;