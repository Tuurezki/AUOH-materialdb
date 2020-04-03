const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
const body_parser = require('body-parser');

const material_controller = require('./material_controller');

app.use(body_parser.json()); //req.body.name
app.use(body_parser.urlencoded({
    extended:true
})); // material/id

app.use( (req, res, next)=>{
    console.log(req.method, ' ', req.path);
    next();
}); //GET /api/materials


// RESTful API
// CRUD OPERATIONS

// CREATE
app.post("/api/material", material_controller.api_post_material);

// READ
app.get("/api/materials", material_controller.api_get_materials);
// UPDATE

// DELETE


app.listen(port);



