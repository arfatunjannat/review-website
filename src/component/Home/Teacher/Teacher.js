import React from 'react';
import {Card, Col} from 'react-bootstrap'
const Teacher = (props) => {
    const{ name, adress, picture, subject }=props.teach
    return (
        <div>

            
  
    <Col>
      <Card>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>name:{name}</Card.Title>
          <h3>subject:{subject}</h3>
            <h5>adress{adress}</h5>
        </Card.Body>
      </Card>
    </Col>
  


        </div>
    );
};

export default Teacher;