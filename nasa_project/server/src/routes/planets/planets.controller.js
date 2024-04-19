const { getAllPlanets } = require('../../models/planets.model')

function getallPlanets(req,res){
  return res.status(200).json(getAllPlanets());
}

module.exports = {
  getallPlanets
}