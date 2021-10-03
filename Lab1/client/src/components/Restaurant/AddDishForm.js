import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from 'react-bootstrap';

function AddDishForm() {
  const [restId, setRestId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [dishImageUrl, setDishImageUrl] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleIngredientsChange = (e) => {
    setIngredients(e.target.value);
  };
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleTypeChange = (e) => {
    setType(e.target.value);
  };
  const handleDishImageUrlChange = (e) => {
    setDishImageUrl(e.target.value);
  };

  const addDish=(e)=>{
    e.preventDefault();
    console.log("inside Adddish");
    const dish={name:name, price:price, ingredients:ingredients, description:description, category:category, type:type }
    console.log("inside Adddish data object", dish);
    
  }
  return (
        <Container style={{width:"50%"}}>
            <h1 className="text-center"> Add New Dish</h1>
      <form onSubmit={addDish}>
        <div className="row m-1">
          <label>Dish Name </label>
          <input
            type="text"
            className="form-control"
            name="name"
            required
            onChange={handleNameChange}
          />
        </div>
        <div className="row m-1">
          <label>Main Ingredients</label>
          <input
            type="text"
            className="form-control"
            name="ingredients"
            required
            onChange={handleIngredientsChange}
          />
        </div>

        <div className="row m-1">
          <label>Dish Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            required
            onChange={handlePriceChange}
          />
        </div>

        <div className="row m-1">
          <label>Description </label>
          <input
            type="text"
            className="form-control"
            name="description"
            required
            onChange={handleDescriptionChange}
          />
        </div>

        <div className="row m-1">
            <label >Dish Category</label>
            <select
              className="dropcustom p-2"
              required
              onChange={handleCategoryChange}
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

          <div className="row m-1">
            <label >Dish Type</label>
            <select
              className="dropcustom p-2"
              required
              onChange={handleTypeChange}
            >
              <option disabled selected>
                {" "}
                -- select category --{" "}
              </option>
              <option value="Veg">Veg</option>
              <option value="Non-Veg">Non-Veg</option>
              <option value="Vegan">Vegan</option>
                         
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
