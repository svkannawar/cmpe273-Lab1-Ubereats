import React from 'react'
import CustNavbar from './CustNavbar'
import img from './../../images/showcase.svg'
import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RestList from './RestList';
import rest2 from './../../images/rest2.jpg';
import rest3 from './../../images/rest3.jpg';

function CustDashBoard() {
    const [cart, setCart] = useState([]);
    const [id, setId] = useState('id');
    const [isVeg, setIsVeg] = useState('');
    const [isNonVeg, setIsNonVeg] = useState('');
    const [isVegan, setIsVegan] = useState('');
    // const [restId, setRestId] = useState('');
    // const [name, setName] = useState('name');
    // const [location, setLocation] = useState('location');
    // const [description, setDescription] = useState('description');
    // const [phone, setPhone] = useState('phone');
    // const [timing, setTiming] = useState('');
    // const [restProfileUrl, setrestProfileUrl] = useState(img);
    // const [modeOfDelivery, setmMdeOfDelivery] = useState('modeOfDelivery');

useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
   
}, [])

   const dummy_data=[
        {
            id: 83,
            name: "Swaraj",
            address: "562, Trends Avenue, Milpitas",
            location: "San Jose",
            description: "We serve Maharashtrian chat!!",
            phone: 536276727,
            timing: "Monday to Sunday 10 am to 10 pm",
            restProfileUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
            modeOfDelivery: "delivery"


        },
        {
            id: 84,
            name: "Sukanta",
            address: "562, Trends Avenue, Milpitas",
            location: "San Jose",
            description: "We serve Rajasthani thali!",
            phone: 536276727,
            timing: "Monday to Sunday 10 am to 10 pm",
            restProfileUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
            modeOfDelivery: "pickup"
        },
        {
            id: 85,
            name: "Swaraj",
            address: "562, Trends Avenue, Milpitas",
            location: "San Jose",
            description: "We serve Maharashtrian chat!!",
            phone: 536276727,
            timing: "Monday to Sunday 10 am to 10 pm",
            restProfileUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
            modeOfDelivery: "delivery"


        },
        {
            id: 86,
            name: "Sukanta",
            address: "562, Trends Avenue, Milpitas",
            location: "San Jose",
            description: "We serve Rajasthani thali!",
            phone: 536276727,
            timing: "Monday to Sunday 10 am to 10 pm",
            restProfileUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
            modeOfDelivery: "pickup"
        },
        {
            id: 87,
            name: "Swaraj",
            address: "562, Trends Avenue, Milpitas",
            location: "San Jose",
            description: "We serve Maharashtrian chat!!",
            phone: 536276727,
            timing: "Monday to Sunday 10 am to 10 pm",
            restProfileUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
            modeOfDelivery: "delivery"


        },
        {
            id: 88,
            name: "Sukanta",
            address: "562, Trends Avenue, Milpitas",
            location: "San Jose",
            description: "We serve Rajasthani thali!",
            phone: 536276727,
            timing: "Monday to Sunday 10 am to 10 pm",
            restProfileUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
            modeOfDelivery: "pickup"
        }
    ]

// credid
// email
// name
// location
// description
// phone
// timing
// modeOfDelivery
// restProfileUrl


    return (
        <div>
            <CustNavbar/>
            <Container fluid>
                <Row>
                    <Col sm={3} md={3} lg={2} className="mt-3 text-center"  style={{borderRight:'1px solid #adabab'}}>
                        <h5 className="text-start">Filters</h5>
                        <Row>
                            <Col md-5>
                            <div   className="text-start checkbox mb-2" >
                            <label>
                            <input  className="text-start" type="checkbox" value="veg" onChange= {(e)=>{setIsVeg(e.target.value)}}/>
                            <span class="cr" style={{padding: "5px"}}><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                           Veg
                            </label>
                            </div>
                            </Col>
                            <Col md-5>
                            <div className="text-start checkbox mb-2">
                            <label>
                            <input type="checkbox" value="non-veg" onChange= {(e)=>{setIsNonVeg(e.target.value)}}/>
                            <span class="cr" style={{padding: "5px"}}><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                           Non-veg
                            </label>
                            </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md-5>
                            <div className="text-start checkbox">
                            <label>
                            <input type="checkbox" value="vegan" onChange= {(e)=>{setIsVegan(e.target.value)}}/>
                            <span class="cr" style={{padding: "5px"}}><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                            Vegan
                            </label>
                            </div>
                            </Col>
                            <Col md-5>
                           
                            </Col>
                        </Row>
                    </Col>
                   
                    <Col sm={9} md={9} lg={10} className="mt-3" >
                        <section>
                        <h3> All Restaurants</h3>
                        <RestList restaurants={dummy_data}/>
                         </section>
                       
                    </Col>
                </Row>
                {/* {console.log(isVeg, isNonVeg, isVegan)} */}
                
            </Container>
            
        </div>
    )
}

export default CustDashBoard
