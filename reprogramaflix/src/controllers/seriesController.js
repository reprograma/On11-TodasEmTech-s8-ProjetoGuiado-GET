const series = require("../models/series.json");

const getAll = (req, res) => {
  res.status(200).json(series);
};

module.exports = {
  getAll
}
