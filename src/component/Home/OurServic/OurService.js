import React, { useEffect, useState } from 'react';
import Ourmainservice from '../Ourmainservice/Ourmainservice';
import {Row} from 'react-bootstrap'

const OurService = () => {

    const [ourservices,setOurservices] = useState([])

    useEffect(()=>{
        fetch('./services.JSON')
        .then(res=>res.json())
        .then(data=>setOurservices(data))
    },[])
    return (
        <div>
            <h2>hello service</h2>
            <Row xs={1} md={3} className="g-4">
             {
               ourservices.map(ourservice=> <Ourmainservice
                
                ourservice ={ourservice}
                ></Ourmainservice>)  
             } 
        </Row>
        </div>
    );
};

export default OurService;