const sql = require("../models/db.js");
const Credential = require("../models/creds.model.js");
const Customer = require("../models/custDetails.model.js");
const Restaurant = require("../models/restDetails.model.js");
const bcrypt = require('bcrypt');
const validationResult = require('express-validator').validationResult;
const jwt=require("jsonwebtoken");

const jwt_access_token="ca18e1211791792703c127254e004855fef92f9ff330438118dea2ada4c13d78f5ebfe3a157527e27e0dfc440a941de2e70011c8905a00d10d79264c3a362086";
// Create and Save a new user
exports.create = async (req, res) => {
   // Validate request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!!"
    });
  }

  const email=req.body.email;
   const password=req.body.password;
  const errorsval=validationResult(req);
  if(!errorsval.isEmpty()){
    console.log(errorsval.array())
    return res.status(400).send({
      errors:errorsval.array()
    })
  }

 // Create a Credential

 const saltRounds = 10;
 //const password = req.body.password;
 const encryptedPassword = await bcrypt.hash(password, saltRounds);


 const credential = new Credential({
  email: req.body.email,
  password: encryptedPassword,
  location: req.body.location,
  role: req.body.role,
  name: req.body.name
});


//validate if user doesnt already exist

Credential.findByEmail(email, (err, result) => {
  if (err){
    console.log("findemail meaerror aya");
    res.status(400).send({
      message:
        err.message || "Some error occurred while finding email."
    });
    }else{
      if(result.length===0){
        
  // Save credentials in the database
  Credential.create(credential, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Credentials."
      });
     

      let detailsErr=null;
      let detailsData={};

      //if user is a customer
      if(credential.role==="customer"){
         // Create a Customer
    const customer = new Customer({
    email: req.body.email,
    name: req.body.name,
    credid:data.id
  });
     Customer.create(customer, (detailsErr, detailsData )=>{})
      }else{
        //if user is a restaurant
          // Create a Restaurant
    const restaurant = new Restaurant({
      email: req.body.email,
      name: req.body.name,
      location: req.body.location,
      credid:data.id
    });
       Restaurant.create(restaurant, (detailsErr, detailsData )=>{})

      }

      if(detailsErr){
        res.status(500).send({
          message:
          detailsErr.message || "Some error occured while creating the credentials"
        })
      }

    res.send(data);
  });

      } else{
        res.status(400).send({
          message: "Email id already exists!"
        });
      }

    }
    
  
})

};

exports.signin = async (req, res) =>{
   // Validate request
   if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!!"
    });
  }
  console.log("fghj");
  // res.status(400).send({
  //   message: "signin up!"
  // })

  const email=req.body.email;
  const password=req.body.password;
  const role=req.body.role;

  Credential.findByEmail(email, (err, result) =>{
    if (err){
      console.log(" ---------signin findemail me error aya===========");
      res.status(400).send({
        message:
          "Some error occurred while finding email."
      });
      }else if(result.length===0){
        //console.log(result);
        res.send({
          message: "User with this email id does not exist."
        });
      } else if(result.length===1){
        console.log("====userpasswordform----", password);
        console.log(result[0].password);
        if(bcrypt.compareSync(password, result[0].password)){
          
          const accessToken = jwt.sign(result[0].email, jwt_access_token );
          res.json({accessToken:accessToken, id:result[0].ID, role:result[0].role, name:result[0].name});
        }else {
          res.status(403).send({
            message: "Login credentials invalid"});
        }
      }
  })
  
}

exports.jwtcheck= async (req, res)=>{
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!!"
    });
  }

  res.send("working");

}

















// const db = require("../models");
// const Creds = db.creds;

// const bcrypt = require('bcrypt');
// const saltRounds = 10;

// exports.create = async (req, res) => {
//   // Validate request
//   if (!req.body.title) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//     return;
//   }

//   const password = req.body.password;    
//   const encryptedPassword = await bcrypt.hash(password, saltRounds)

//   // Create a Tutorial
//   const creds = {
//     email: req.body.email,
//     password: encryptedPassword,
//     location: req.body.location,
//     role: req.body.role,
//     name: req.body.name
//   };

//   // Save Tutorial in the database
//   Creds.create(creds)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while creating the Tutorial."
//       });
//     });
// };

// // Retrieve all Tutorials from the database.
// exports.findAll = (req, res) => {
  
// };

// // Find a single Tutorial with an id
// exports.findOne = (req, res) => {
  
// };

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {
  
// };

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {
  
// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
  
// };

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {
  
// };





// // Retrieve all Customers from the database.
// exports.findAll = (req, res) => {
  
//     Customer.getAll((err, data) => {
//         if (err)
//           res.status(500).send({
//             message:
//               err.message || "Some error occurred while retrieving customers."
//           });
//         else res.send(data);
//       });
// };

// // Find a single Customer with a customerId
// exports.findOne = (req, res) => {
  
//     Customer.findById(req.params.customerId, (err, data) => {
//         if (err) {
//           if (err.kind === "not_found") {
//             res.status(404).send({
//               message: `Not found Customer with id ${req.params.customerId}.`
//             });
//           } else {
//             res.status(500).send({
//               message: "Error retrieving Customer with id " + req.params.customerId
//             });
//           }
//         } else res.send(data);
//       });
// };

// // Update a Customer identified by the customerId in the request
// exports.update = (req, res) => {
  
//   // Validate Request
//   if (!req.body) {
//     res.status(400).send({
//       message: "Content can not be empty!"
//     });
//   }

//   Customer.updateById(
//     req.params.customerId,
//     new Customer(req.body),
//     (err, data) => {
//       if (err) {
//         if (err.kind === "not_found") {
//           res.status(404).send({
//             message: `Not found Customer with id ${req.params.customerId}.`
//           });
//         } else {
//           res.status(500).send({
//             message: "Error updating Customer with id " + req.params.customerId
//           });
//         }
//       } else res.send(data);
//     }
//   );
// };

// // Delete a Customer with the specified customerId in the request
// exports.delete = (req, res) => {
  
//     Customer.remove(req.params.customerId, (err, data) => {
//         if (err) {
//           if (err.kind === "not_found") {
//             res.status(404).send({
//               message: `Not found Customer with id ${req.params.customerId}.`
//             });
//           } else {
//             res.status(500).send({
//               message: "Could not delete Customer with id " + req.params.customerId
//             });
//           }
//         } else res.send({ message: `Customer was deleted successfully!` });
//       });
// };

// // Delete all Customers from the database.
// exports.deleteAll = (req, res) => {
  
//     Customer.removeAll((err, data) => {
//         if (err)
//           res.status(500).send({
//             message:
//               err.message || "Some error occurred while removing all customers."
//           });
//         else res.send({ message: `All Customers were deleted successfully!` });
//       });
// };