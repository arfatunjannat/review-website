import React from 'react';
import {Card, Col} from 'react-bootstrap'

const Ourmainservice = (props) => {

    const { name, subject, coursefee}= props.ourservice;
    return (
        <div>
            <h1>our services </h1>
            

            <Col>
      <Card>
        
        <Card.Body>
          <h2>name:{name}</h2>
          <h3>subject:{subject}</h3>
          <h5>coursefee:{coursefee}</h5> 
        </Card.Body>
      </Card>
    </Col>
            
          
          
           
        
        </div>
    );
};

export default Ourmainservice;