import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function DishEdit() {
  let { id } = useParams();

 // const [restId, setRestId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [description, setDescription] = useState("");
  
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [dishImageUrl, setDishImageUrl] = useState("");

  const dishes_data = [
    {
      restid: 83,
      name: "Paneer Punjabi",
      ingredients: "Paneer,sd,sd,sf,sfs,sf,sff,",
      id: 2,
      price: 10,
      description: "Spicy curry with Punjabi flavor",
      category: "Main Course",
      type: "veg",
      dishImageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    },
  ];

  useEffect(() => {
    setName(dishes_data[0].name);
    setPrice(dishes_data[0].price);
    setIngredients(dishes_data[0].ingredients);
    setDescription(dishes_data[0].description);
    setCategory(dishes_data[0].category);
    setType(dishes_data[0].type);
    setDishImageUrl(dishes_data[0].dishImageUrl);
  }, []);

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

  const editDish=(e)=>{
      e.preventDefault();
      const dish={name:name, price:price, ingredients:ingredients, description:description, category:category, type:type }
    console.log("inside edit dish submit", dish)
  }
  return (
    <Container style={{ width: "50%" }}>
      <h1 className="text-center"> Edit Dish</h1>
      <form onSubmit={editDish}>
        <div className="row m-1">
          <label>Dish Name </label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder={name}
            onChange={handleNameChange}
          />
        </div>
        <div className="row m-1">
          <label>Main Ingredients</label>
          <input
            type="text"
            className="form-control"
            name="ingredients"
            placeholder={ingredients}
            onChange={handleIngredientsChange}
          />
        </div>

        <div className="row m-1">
          <label>Dish Price</label>
          <input
            type="number"
            className="form-control"
            name="price"
            placeholder={price}
            onChange={handlePriceChange}
          />
        </div>

        <div className="row m-1">
          <label>Description </label>
          <input
            type="text"
            className="form-control"
            name="description"
            placeholder={description}
            onChange={handleDescriptionChange}
          />
        </div>

        <div className="row m-1">
          <label>Dish Category</label>
          <select className="dropcustom p-2" onChange={handleCategoryChange}>
            <option disabled selected>
              {" "}
              {category}
            </option>
            <option value="Appetizer">Appetizer</option>
            <option value="Salads">Salads</option>
            <option value="Main Course">Main Course</option>
            <option value="Desserts">Desserts</option>
            <option value="Beverages">Beverages</option>
          </select>
        </div>
        <div className="row m-1">
          <label>Dish Type</label>
          <select className="dropcustom p-2" onChange={handleTypeChange}>
            <option disabled selected>
              {" "}
              {type}
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

export default DishEdit;
