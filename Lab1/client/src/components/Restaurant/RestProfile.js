import CustNavbar from "./../Customer/CustNavbar";

import React, { Component, useState } from "react";
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
//import cookie from 'react-cookies';
import axios from "axios";
import ReactModal from "react-modal";
//import BACKEND_URL from '../../../config/config'
import { useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

function CustProfile({ props }) {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [location, setLocaion] = useState("");
//   const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [profileImageUpdate, setProfileImageUpdate] = useState(false);
  const [profileImagePath, setProfileImagePath] = useState("");
  const [error, setError] = useState("");
  const [newProfileImage, setNewProfileImage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  const options = useMemo(() => countryList().getData(), []);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocaion(e.target.value);
  };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };
  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleFromDateChange = (e) => {
    setFromDate(e.target.value);
  };
  const handleToDateChange = (e) => {
    setToDate(e.target.value);
  };
  const handleFromTimeChange = (e) => {
    setFromTime(e.target.value);
  };
  const handleToTimeChange = (e) => {
    setToTime(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("in handle submit");
  };

  //     //Image Upload toggle
  const toggleImageUpdate = (e) => {
    setProfileImageUpdate(!profileImageUpdate);
  };

  //     //Image Upload
  const handleImageUpload = (e) => {
    setNewProfileImage(e.target.files[0]);
  };

  //     //Image Submit
  const handleImageSubmit = (e) => {
    e.preventDefault();
    console.log("in on submit for image change");
  };

  // var redirectVar = null;
  // if ( !( cookie.load( "auth" ) && cookie.load( "type" ) === "users" ) ) {
  //     redirectVar = <Redirect to="/login" />
  // }
  // let renderError = null
  // if ( this.state.error ) {
  //     renderError = <div style={ { 'color': 'red' } }>{ this.state.errorMessage }</div>
  // }
  return (
    <div>
      {/* { redirectVar } */}
      <div className="container-fluid">
        <div className="row h-100 mt-2">
          <div className="col-2">
            <div className="row" style={{ height: "40%" }}></div>
            <div className="row" style={{ height: "60%" }}>
              <h3>Edit Profile</h3>
            </div>
          </div>
          <div className="col-10">
            <div className="row ml-3">
              <button className="btn btn-primary" onClick={toggleImageUpdate}>
                Change Profile Picture
              </button>
              <ReactModal isOpen={profileImageUpdate}>
                <form
                  onSubmit={handleImageSubmit}
                  encType="multipart/form-data"
                  style={{ textAlign: "Center" }}
                >
                  <input
                    type="file"
                    name="newProfileImage"
                    onChange={handleImageUpload}
                  />
                  <button className="btn btn-primary" type="submit">
                    Done
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={toggleImageUpdate}
                  >
                    Cancel
                  </button>
                </form>
              </ReactModal>
            </div>
            <form onSubmit={handleOnSubmit}>
              <div className="row m-1">
                <div className="col-5">
                  <label>Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder={name}
                    onChange={handleNameChange}
                  />
                </div>
                <div className="col-5">
                  <label>Location:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="location"
                    placeholder={location}
                    onChange={handleLocationChange}
                  />
                </div>
              </div>

              <div className="row m-1">
                {/* <div className="col-10">
                  <label>Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder={email}
                    onChange={handleEmailChange}
                  />
                </div> */}
              </div>
              <div className="row m-1">
                <div className="col-5">
                  <label>Contact Number:</label>
                  <input
                    type="number"
                    className="form-control"
                    name="phone"
                    placeholder={phone}
                    onChange={handlePhoneChange}
                  />
                </div>
                <div className="col-5">
                  <label>Description: </label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    placeholder={description}
                    onChange={handleDescriptionChange}
                  />
                </div>
              </div>

              <div className="row m-1">
                <label>Timings:</label>
                <div className="col-5">
                  <label className="p-2">From day</label>
                  <select
                    className="drop p-2"
                    style={{ marginLeft: -5, border: "none" }}
                    value={fromDate}
                    onChange={handleFromDateChange}
                  >
                    <option disabled selected>
                      {" select day"}
                      -- select an option --{" "}
                    </option>
                    <option value="Sunday">Sunday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                  </select>
                </div>
                
              

            
                <div className="col-5">
                  <label className="p-2">To Day:</label>
                  <select
                    className="drop p-2"
                    style={{ marginLeft: -5, border: "none" }}
                    value={toDate}
                    onChange={handleToDateChange}
                  >
                    <option disabled selected>
                      {" "}
                      -- select an option --{" "}
                    </option>
                    <option value="Sunday">Sunday</option>
                    <option value="Monday">Monday</option>
                    <option value="Tuesday">Tuesday</option>
                    <option value="Wednesday">Wednesday</option>
                    <option value="Thursday">Thursday</option>
                    <option value="Friday">Friday</option>
                    <option value="Saturday">Saturday</option>
                  </select>
               </div>
               </div>
             
               <div className="row m-1">
               <div className="col-5">

                  <label className="p-2">From time</label>
                  <select
                    className="drop p-2"
                    style={{ marginLeft: -5, border: "none" }}
                    value={fromTime}
                    onChange={handleFromTimeChange}
                  >
                    <option disabled selected>
                      {" "}
                      -- select an option --{" "}
                    </option>
                    <option value="12:00 am">12:00 am</option>
                    <option value="1:00 am">1:00 am</option>
                    <option value="2:00 am">2:00 am</option>
                    <option value="3:00 am">3:00 am</option>
                    <option value="4:00 am">4:00 am</option>
                    <option value="5:00 am">5:00 am</option>
                    <option value="6:00 am">6:00 am</option>
                    <option value="7:00 am">7:00 am</option>
                    <option value="8:00 am">8:00 am</option>
                    <option value="9:00 am">9:00 am</option>
                    <option value="10:00 am">10:00 am</option>
                    <option value="11:00 am">11:00 am</option>
                    <option value="12:00 pm">12:00 pm</option>
                    <option value="1:00 pm">1:00 pm</option>
                    <option value="2:00 pm">2:00 pm</option>
                    <option value="3:00 pm">3:00 pm</option>
                    <option value="4:00 pm">4:00 pm</option>
                    <option value="5:00 pm">5:00 pm</option>
                    <option value="6:00 pm">6:00 pm</option>
                    <option value="7:00 pm">7:00 pm</option>
                    <option value="8:00 pm">8:00 pm</option>
                    <option value="9:00 pm">9:00 pm</option>
                    <option value="10:00 pm">10:00 pm</option>
                    <option value="11:00 pm">11:00 pm</option>
                  </select>
               </div>
             
              
               <div className="col-5">
                  <label className="p-2">To time:</label>
                  <select
                    className="drop p-2"
                    style={{ marginLeft: -5, border: "none" }}
                    value={toTime}
                    onChange={handleToTimeChange}
                  >
                    <option disabled selected>
                      {" "}
                      -- select an option --{" "}
                    </option>
                    <option value="12:00 am">12:00 am</option>
                    <option value="1:00 am">1:00 am</option>
                    <option value="2:00 am">2:00 am</option>
                    <option value="3:00 am">3:00 am</option>
                    <option value="4:00 am">4:00 am</option>
                    <option value="5:00 am">5:00 am</option>
                    <option value="6:00 am">6:00 am</option>
                    <option value="7:00 am">7:00 am</option>
                    <option value="8:00 am">8:00 am</option>
                    <option value="9:00 am">9:00 am</option>
                    <option value="10:00 am">10:00 am</option>
                    <option value="11:00 am">11:00 am</option>
                    <option value="12:00 pm">12:00 pm</option>
                    <option value="1:00 pm">1:00 pm</option>
                    <option value="2:00 pm">2:00 pm</option>
                    <option value="3:00 pm">3:00 pm</option>
                    <option value="4:00 pm">4:00 pm</option>
                    <option value="5:00 pm">5:00 pm</option>
                    <option value="6:00 pm">6:00 pm</option>
                    <option value="7:00 pm">7:00 pm</option>
                    <option value="8:00 pm">8:00 pm</option>
                    <option value="9:00 pm">9:00 pm</option>
                    <option value="10:00 pm">10:00 pm</option>
                    <option value="11:00 pm">11:00 pm</option>
                  </select>
               </div>
               </div>
             
              <div className="row mt-3 ml-1">
                <div className="col-2">
                  <button type="submit" className="btn btn-primary">
                    Update
                  </button>
                </div>
                <div className="col-8">
                  <Link className="btn btn-danger" to="/users/about">
                    Cancel
                  </Link>
                </div>
              </div>
            </form>
            {/* { renderError } */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustProfile;
