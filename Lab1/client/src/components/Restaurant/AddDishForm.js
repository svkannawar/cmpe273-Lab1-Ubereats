import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';

function AddDishForm() {
  const [id, setId] = useState("");
  const [dishName, setDishName] = useState("");
  const [location, setLocaion] = useState("");
  const [dishPrice, setDishPrice] = useState("");
  const [description, setDescription] = useState("");
  const [profileImageUpdate, setProfileImageUpdate] = useState(false);
  const [profileImagePath, setProfileImagePath] = useState("");
  const [error, setError] = useState("");
  return (
        <Container style={{width:"50%"}}>
            <h1 className="text-center"> Add New Dish</h1>
      <form>
        <div className="row m-1">
          <label>Dish Name </label>
          <input
            type="text"
            className="form-control"
            name="dishName"
            required
            // placeholder={name}
            // onChange={handleNameChange}
          />
        </div>
        <div className="row m-1">
          <label>Main Ingredients</label>
          <input
            type="text"
            className="form-control"
            name="mainIngredients"
            required
            // placeholder={location}
            // onChange={handleLocationChange}
          />
        </div>

        <div className="row m-1">
          <label>Dish Price</label>
          <input
            type="number"
            className="form-control"
            name="dishPrice"
            required
            // placeholder={location}
            // onChange={handleLocationChange}
          />
        </div>

        <div className="row m-1">
          <label>Description </label>
          <input
            type="text"
            className="form-control"
            name="description"
            required
            // placeholder={description}
            // onChange={handleDescriptionChange}
          />
        </div>

        <div className="row m-1">
            <label >Dish Category</label>
            <select
              className="dropcustom p-2"
              required
             
              // value={toTime}
              // onChange={handleToTimeChange}
            >
              <option disabled selected>
                {" "}
                -- select category --{" "}
              </option>
              <option value="Appetizer">Appetizer</option>
              <option value="Salads">Salads</option>
              <option value="Main Course">Main Course</option>
              <option value="Desserts">Desserts</option>
              <option value="Beverages">Beverages</option>
             
            </select>
          </div>

       

        

        <div className="row mt-3 ml-1 ">
          <div className="col-6 text-end">
            <button type="submit" className="btn btn-primary ">
              Update
            </button>
          </div>
          <div className="col-6">
            <Link className="btn btn-danger" to="/restDashboard">
              Cancel
            </Link>
          </div>
        </div>
      </form>
      </Container>
    
  );
}

export default AddDishForm;
