module.exports = app => {
    const teacher = require("../controllers/teacher.controller.js");
  
    var router = require("express").Router();

    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "Origin, Content-Type, Accept"
        );
        next();
    });
  
    // Create a new Teacher
    router.post("/", teacher.create);
  
    // Retrieve all Teachers
    router.get("/", teacher.findAll);
  
    // Retrieve a single Teacher by id
    router.get("/:id" , teacher.findOne);
  
    // Update a Teacher by id
    router.put("/:id" , teacher.update);
  
    // Delete a Teacher by id
    router.delete("/:id" , teacher.delete);
  
    app.use("/api/teacher", router);
};
