import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Container, Image } from "react-bootstrap";
import CustNavbar from "./../Customer/CustNavbar";
import DishList from "../Customer/DishList";
import BACKEND_URL from "../../config/configBackendURL";
import axios from "axios";
import { icons } from "react-icons/lib";
import { MdFavorite } from "react-icons";
import { BsHeartFill, BsHeart } from "react-icons/bs";
import { MdOutlineFavoriteBorder } from "react-icons";

const idFromLS = localStorage.getItem("id");
function RestaurantPage() {
  let { id } = useParams();

  const [bearer, setBearer] = useState("");
  const [restId, setRestId] = useState("");
  const [name, setName] = useState("");
  const [custName, setCustName] = useState("");
  const [address, setAddress] = useState("");
  const [custId, setCustId] = useState(idFromLS);
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [timing, setTiming] = useState("");
  const [restProfileUrl, setRestProfileUrl] = useState("");
  const [modeOfDelivery, setMdeOfDelivery] = useState("");
  const [fav, setFav] = useState(false);
  const [dishesData, setDishesData] = useState([]);
  // const [favData, setFavData]=useState()
  const custid = localStorage.getItem("id");

  useEffect(() => {
    var body = {
      restId: id,
    };

    axios({
      method: "post",
      url: BACKEND_URL + "/getRestProfile",
      data: body,
      headers: { "Content-Type": "application/json", Authorization: bearer },
    })
      .then((response) => {
        console.log("xcvbnmnbvcxxcvbn", response.data);
        setName(response.data[0].name);
        setAddress(response.data[0].address);
        setLocation(response.data[0].location);
        setDescription(response.data[0].description);
        setTiming(response.data[0].timing);
        setRestProfileUrl(response.data[0].profileUrl);
        setMdeOfDelivery(response.data[0].modeOfDelivery);
        setPhone(response.data[0].phone);
      })
      .catch((error) => {
        //        console.log((error.response.data));
      });

    var body4 = {
      id: id,
    };
    axios({
      method: "post",
      url: BACKEND_URL + "/getDishes",
      data: body4,
      headers: { "Content-Type": "application/json", Authorization: bearer },
    })
      .then((response) => {
        console.log("dishes big bug", response.data);
        setDishesData(response.data);
      })
      .catch((error) => {
        //        console.log((error.response.data));
      });

    var body1 = {
      id: id,
    };
    axios({
      method: "post",
      url: BACKEND_URL + "/getDishes",
      data: body,
      headers: { "Content-Type": "application/json", Authorization: bearer },
    })
      .then((response) => {
        console.log("restprofurl", response.data);
        setDishesData(response.data);
      })
      .catch((error) => {
        //        console.log((error.response.data));
      });

    var body2 = {
      id: custid,
    };
    axios({
      method: "post",
      url: BACKEND_URL + "/getCustProfile",
      data: body2,
      headers: { "Content-Type": "application/json", Authorization: bearer },
    })
      .then((response) => {
        console.log("restprofurl", response.data);
        setCustName(response.data[0].name);
      })
      .catch((error) => {
        //        console.log((error.respoMnse.data));
      });

    var body3 = {
      userId: custid,
      restId: id,
    };

    console.log("fav data", body3);
    axios({
      method: "post",
      url: BACKEND_URL + "/getRestAsFav",
      data: body3,
      headers: { "Content-Type": "application/json", Authorization: bearer },
    })
      .then((response) => {
        console.log("fav data from DB", response.data);
        if (response.data.length > 0) {
          setFav(true);
        }
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  const filtDataAppetizer = dishesData.filter(
    (dish) => dish.category === "Appetizer"
  );
  const filtDataBeverages = dishesData.filter(
    (dish) => dish.category === "Beverages"
  );
  const filtDataMainCourse = dishesData.filter(
    (dish) => dish.category === "Main Course"
  );
  const filtDataDesserts = dishesData.filter(
    (dish) => dish.category === "Desserts"
  );
  const filtDataSalads = dishesData.filter(
    (dish) => dish.category === "Salads"
  );

  const updateFav = () => {
    if (!fav) {
      setFav(true);
      var body = {
        userId: custid,
        restId: id,
      };

      axios({
        method: "post",
        url: BACKEND_URL + "/addFavs",
        data: body,
        headers: { "Content-Type": "application/json", Authorization: bearer },
      })
        .then((response) => {
          console.log("xcvbnmnbvcxxcvbn", response.data);
        })
        .catch((error) => {
          //        console.log((error.response.data));
        });
    } else if (fav) {
      var body5 = {
        userId: custid,
        restId: id,
      };
      setFav(false);

      axios({
        method: "delete",
        url: BACKEND_URL + "/removeFavs",
        data: body5,
        headers: { "Content-Type": "application/json", Authorization: bearer },
      })
        .then((response) => {
          console.log("xcvbnmnbvcxxcvbn", response.data);
        })
        .catch((error) => {
          //        console.log((error.response.data));
        });
    }
  };
  //console.log("rest image", favData.length());
  return (
    <Container fluid>
      <CustNavbar />
      <Row className="p-4">
        <div class="card-body">
         
  
        </div>
        {/* <img
          class="card-img-bottom"
          style={{
            width: "100%",
            height: "70vh",
            paddingRight: "20px",
            float: "left",
          }}
          src={restProfileUrl}
          alt={name}
        /> */}

        <Row>
          {" "}
          <div className="image_over_Text">
            <Image
              style={{ width: "100%", height: "240px", objectFit: "cover" }}
              src={restProfileUrl}
              alt="cover_image"
            />
            <div className="bottom-left">
              <h1>
                {name}
                <div style={{ fontSize: "22px", color: "white" }}>
                  {description}
                </div>
              </h1>
            </div>
          </div>
        </Row>
      </Row>
      <Row>
        <div className="col-sm-6">
          <h3>Items Currently on the Menu Card </h3>
        </div>

        <div
          style={{ paddingRight: "5%" }}
          className="col-sm-6 text-end"
          onClick={updateFav}
        >
          {fav ? (
            <h3>
              <BsHeartFill />
            </h3>
          ) : (
            <h3>
              <BsHeart />
            </h3>
          )}
        </div>
      </Row>

      <Row>
        {/* <Col className="mt-3">
            <DishList dishes={dishesData} id={id} custName={custName} restName={name} modeOfDelivery={modeOfDelivery} custId={custId} />   
        </Col> */}
        <Row>
          {/* <Col className="mt-3">
            <DishList dishes={dishesData} id={id} custName={custName} restName={name} modeOfDelivery={modeOfDelivery} custId={custId} />   
        </Col> */}
          <Row>
            <Col className="mt-1 p-3">
              <h1>Salads</h1>
              <DishList
                dishes={filtDataSalads}
                id={id}
                custName={custName}
                restName={name}
                modeOfDelivery={modeOfDelivery}
                custId={custId}
              />
            </Col>
          </Row>
          <Row>
            <Col className="mt-1 p-3">
              <h1>Appetizers</h1>
              <DishList
                dishes={filtDataAppetizer}
                id={id}
                custName={custName}
                restName={name}
                modeOfDelivery={modeOfDelivery}
                custId={custId}
              />
            </Col>
          </Row>
          <Row>
            <Col className="mt-1 p-3">
              <h1>Main Course</h1>
              <DishList
                dishes={filtDataMainCourse}
                id={id}
                custName={custName}
                restName={name}
                modeOfDelivery={modeOfDelivery}
                custId={custId}
              />
            </Col>
          </Row>
          <Row>
            <Col className="mt-1 p-3">
              <h1>Beverages</h1>
              <DishList
                dishes={filtDataBeverages}
                id={id}
                custName={custName}
                restName={name}
                modeOfDelivery={modeOfDelivery}
                custId={custId}
              />
            </Col>
          </Row>
          <Row>
            <Col className="mt-1 p-3">
              <h1>Desserts</h1>
              <DishList
                dishes={filtDataDesserts}
                id={id}
                custName={custName}
                restName={name}
                modeOfDelivery={modeOfDelivery}
                custId={custId}
              />
            </Col>
          </Row>
        </Row>
      </Row>
      {}
    </Container>
  );
}

export default RestaurantPage;
