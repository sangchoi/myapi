var express = require("express");
var db = require("./models"); //Holds all our models from our models directory
var app = express();

//Middleware
//This is the body parser
app.use(express.urlencoded({extended: false}))


//READ ALL
//Gets all dogs
app.get("/dogs", function(req, res) {
    db.dog.findAll().then(function(dogs) {
    console.log(dogs);
    res.json(dogs);
    });
});

//CREATE
// Creating dog
app.post("/dogs", function(req, res) {
    db.dog.findOrCreate({
        where: {
          breed: req.body.breed,
          size: req.body.size,
          age: parseInt(req.body.age)
        }
      }).then(function(dogs) {
          res.json(dogs)
      });
      });

//READ ONE
//Gets one dog
app.get("/dogs/:id", function(req, res) {
    db.dog.findById(parseInt(req.params.id)).then(function(dog) {
        res.json(dog);
    });
});

//UPDATE
//Update one dog
app.put("/dogs/:id", function(req, res) {
    db.dog.update({
        breed: req.body.breed,
        size: req.body.size,
        age: parseInt(req.body.age)
    }, {
        where: {id: parseInt(req.params.id)}
    }).then(function(dog){
        res.json(dog);
    });
});

//DELETE
app.delete("/dogs/:id", function(req, res) {
    db.dog.destoy({
        where: {id: req.params.id}
    }).then(function() {
        res.json({status: "deleted"});
    });
});



app.listen(3000);