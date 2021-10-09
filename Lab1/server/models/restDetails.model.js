const sql = require("./db.js");

// constructor
const Restaurant = function(restaurant) {
    this.credid = restaurant.credid;
    this.email  = restaurant.email ;
    this.name  = restaurant.name ;
    this.location  = restaurant.location ;
    this.description  = restaurant.description ;
    this.phone = restaurant.phone ;
    this.timing=restaurant.timing;
    this.modeOfDelivery  =restaurant.modeOfDelivery  ;
    this.profileUrl = restaurant.profileUrl;
  };
  
  Restaurant.create = (newRestaurant, result) => {
    sql.query("INSERT INTO RestDetails  SET ?", newRestaurant, (err, res) => {
      console.log("new -----rest",newRestaurant.email );
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      console.log("Restaurant details added: ", { id: res.insertId, ...newRestaurant });
      result(null, { id: res.insertId, ...newRestaurant, msg: "success" });
    });
  };

// promise for fetching rest profile info
Restaurant.getRestPorfilePromise = (id) => {
  return new Promise((resolve) => {
    const query = `select * from RestDetails where credid = '${id}'; `;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};
Restaurant.getAllRestWithLoc = (city) => {
  return new Promise((resolve) => {
      const query = `select * from RestDetails where lower(location) = lower('${city}'); `;
      sql.query(query, (err, result) => {
          resolve([err, result]);
      });
  });
}

Restaurant.getAllRestExceptLoc = (city) => {
  return new Promise((resolve) => {
      const query = `select * from RestDetails where lower(location) != lower('${city}'); `;
      sql.query(query, (err, result) => {
          resolve([err, result]);
      });
  });
}

Restaurant.getAllRest = () => {
  return new Promise((resolve) => {
    console.log("inside getallrest");
      const query = `select * from RestDetails; `;
      sql.query(query, (err, result) => {
          resolve([err, result]);
      });
  });
}


Restaurant.getRestWithSearAndMod = (searchStr, modeOfDel) => {
  return new Promise((resolve) => {
   
      const query = `select * from RestDetails where credid in (select restid from Dishes where name like lower('%${searchStr}%')) or location like lower('%${searchStr}%') and modeOfDelivery = '${modeOfDel}';`; // query not good

      sql.query(query, (err, result) => {
          resolve([err, result]);
      });
  });
}


Restaurant.getFilteredRsts = (veg, nonVeg, vegan, city) => {
  return new Promise((resolve) => {
    const query = `select * from RestDetails where credid in (select restid from Dishes where type = lower('${veg}') or type = lower('${nonVeg}') or type = lower('${vegan}')) and location like lower('%${city}%');`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};

Restaurant.updateRestProfilePromise = (
  id,
  name,
  location,
  phone,
  description,
  timing,
  profileUrl
) => {
  return new Promise((resolve) => {
    const query = `update RestDetails set name = '${name}',  location = '${location}', phone = '${phone}', description = '${description}', timing = '${timing}', profileUrl = '${profileUrl}' where credid = '${id}';`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};

Restaurant.getRestPorfile = (id) => {
  return new Promise((resolve) => {
    const query = `select * from RestDetails where credid = '${id}'; `;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};

Restaurant.upadateRestPicPromise = (id, url) => {
  return new Promise((resolve) => {
    const query = `UPDATE RestDetails SET profileUrl='${url}' WHERE credid='${id}';`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};


Restaurant.getRestPicUrl = (id) => {
  return new Promise((resolve) => {
    const query = `select profileUrl from RestDetails where credid = '${id}';`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};




Restaurant.getAllFavRestsPromise = (id) => {
  return new Promise((resolve) => {

      const query = `select * from RestDetails where credid in (select restaurantid from Favorites where userid='${id}'); `;

      sql.query(query, (err, result) => {
          resolve([err, result]);
      });
  });
}



Restaurant.getModRestsPromise = (modeOfDelivery, city) => {
  return new Promise((resolve) => {
    const query = `select * from RestDetails where modeOfDelivery='${modeOfDelivery}' and location like lower('${city}');`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};


Restaurant.getModRestsNotLocPromise = (modeOfDelivery, city) => {
  return new Promise((resolve) => {
    const query = `select * from RestDetails where modeOfDelivery='${modeOfDelivery}' and location not like lower('${city}');`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};


Restaurant.getFilteredRstsNotLoc = (veg, nonVeg, vegan, city) => {
  return new Promise((resolve) => {
    const query = `select * from RestDetails where credid in (select restid from Dishes where type = lower('${veg}') or type = lower('${nonVeg}') or type = lower('${vegan}')) and location not like lower('%${city}%');`;

    sql.query(query, (err, result) => {
      resolve([err, result]);
    });
  });
};





module.exports = Restaurant;