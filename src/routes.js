const express = require('express')
const routes = express.Router()
const instructors = require('./app/controllers/instructors')
const members = require('./app/controllers/members')


routes.get("/",function(req,res){
    return res.redirect("/instructors")
})
routes.get("/instructors", instructors.index) 
routes.get("/instructors/create",instructors.create)
routes.get("/instructors/:id", instructors.show)
routes.get("/instructors/:id/edit", instructors.edit)
routes.put("/instructors", instructors.put)
routes.delete("/instructors", instructors.delete)
routes.post("/instructors", instructors.post) 


routes.get("/members", members.index) 
routes.get("/members/create",members.create)
routes.get("/members/:id", members.show)
routes.get("/members/:id/edit", members.edit)
routes.put("/members", members.put)
routes.delete("/members", members.delete)
routes.post("/members", members.post) 


module.exports = routes

// HTTP
// Resource - Um objeto fisico ou abstrato 
// GET - Receber Resource
// POST - Cria um novo Resource com dados enviados 
// PUT = Atualiza Resource
// DELETE - Deletar um Resource
