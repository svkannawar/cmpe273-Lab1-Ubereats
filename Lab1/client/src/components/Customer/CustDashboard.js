import React from 'react'
import CustNavbar from './CustNavbar'
import img from './../../images/showcase.svg'
import { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import RestList from './RestList';
import rest2 from './../../images/rest2.jpg';
import rest3 from './../../images/rest3.jpg';
import axios from 'axios';
import BACKEND_URL from '../../config/configBackendURL';
import {restlist} from "../../action/DashBoardActionsUE";
import { restaurantlistfilter , searcByhModeOfDeliveryOnly, restlistfordashue} from '../../action/DashBoardActions'
import { useSelector, useDispatch } from "react-redux";

function CustDashBoard(props) {
    const [cart, setCart] = useState([]);
    //const [id, setId] = useState(0);
    
    const [bearer, setBearer] = useState("");
    const [restaurantsList, setRestaurantsList]=useState([]);
    const [checked, setChecked] = useState(false);
    const [isVeg, setIsVeg] = useState(false);
    const [isNonVeg, setIsNonVeg] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    


    const id = localStorage.getItem('id');
    const dispatch = useDispatch();
    
    const handleClickVeg = () => setIsVeg(!isVeg)
   

    const handleClickNonVeg = () => setIsNonVeg(!isNonVeg)
    

    const handleClickVegan = () => setIsVegan(!isVegan)
   

useEffect( () => {

var body={
    id: id
}
dispatch(restlistfordashue(body));
    //  axios({
    //     method: "post",
    //     url: BACKEND_URL + "/displayAllRest",
    //     data: body,
    //     headers: { "Content-Type": "application/json","Authorization": bearer  },
        
    //   })
    //     .then((response) => {
            
    //    //   console.log("axios response", response.data);
    //       setRestaurantsList(response.data);
    //     })
    //     .catch((error) => {
    //    //   console.log((error.response));
    //     });

    },[])

    const redux_data=useSelector(state=>state.restaurantListDashboardue);

    const listofrestaurants=redux_data.restList;
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
            modeOfDelivery: "pickup"


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

const handleChangeisVeg=(e)=>{
    setIsVeg()
}
 
const applyFilter=()=>{

   

    if (!isVeg && !isNonVeg && !isVegan){
        var body={
            id: id
        }
        dispatch(restlistfordashue(body));
    }else{

    var body1={ id: id, veg: isVeg, nonveg: isNonVeg, vegan: isVegan}
    dispatch(restaurantlistfilter(body1));
    }
    // axios({
    //     method: "post",
    //     url: BACKEND_URL + "/filter",
    //     data: body,
    //     headers: { "Content-Type": "application/json","Authorization": bearer  },
    //   })
    //     .then((response) => {
    //       console.log("axios filter", response.data);
    //       setRestaurantsList(response.data);
    //     })
    //     .catch((error) => {
    //       console.log((error.response));
    //     });
        // setIsVeg("");
        // setIsNonVeg("");
        // setIsVegan("");

}

    return (
        <div>
           <CustNavbar/>
            <Container fluid>
                <Row>
                
                        <h5 className="text-start mb-3">Filters</h5>
                        
                            <Col md-3>
                            <div   className="text-start checkbox mb-2" >
                            <label>
                            <input  className="text-start" type="checkbox" value="veg" onClick={handleClickVeg}/>
                            <span class="cr" style={{padding: "5px"}}><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                           Veg
                            </label>
                            </div>
                            </Col>
                            <Col md-3>
                            <div className="text-start checkbox mb-2">
                            <label>
                            <input type="checkbox" value="non-veg" onClick={handleClickNonVeg} checked={isNonVeg} />
                            <span class="cr" style={{padding: "5px"}}><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                           Non-veg
                            </label>
                            </div>
                            </Col>
                        
                        
                            <Col md-3>
                            <div className="text-start checkbox">
                            <label>
                            <input type="checkbox" value="vegan" onClick={handleClickVegan} />
                            <span class="cr" style={{padding: "5px"}}><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                            Vegan
                            </label>
                            </div>
                            </Col>
                            <Col md-3>
                             <Button btn btn-dark style={{width:"60%"}} onClick={applyFilter}>Apply</Button>
                            </Col>
                            </Row>
                       
                        
                    
                    
  
  
                    <Col  className="mt-3" >
                        <section>
                        <h5> Jump on the restaurant and get the hunger killed!!</h5>
                        <RestList restaurants={listofrestaurants} getUpdatedLS={props.getUpdatedLS}/>
                         </section>
                       
                    </Col>
            
               
                
            </Container>
        </div>
    )
}
export default CustDashBoard
