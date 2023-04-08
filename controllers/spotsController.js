//@desc GET all spots
//@route GET /api/spots
//@access Public
const getSpots = (req, res) => {
  res.status(200).json({ message: "get all Spots!", spots: [] });
};

//@desc GET a spot
//@route GET /api/spots/:id
//@access Publics
const getSpot = (req, res) => {
  res.status(200).json({ message: `get a ${req.params.id} Spot!` });
};

//@desc POST a spot
//@route POST /api/spots
//@access Public
const postSpot = (req, res) => {
  console.log(req.body);
  res.status(201).json({ message: "post a Spot!" });
};

//@desc PUT a spot
//@route PUT /api/spots/:id
//@access Public
const putSpot = (req, res) => {
  res.status(200).json({ message: `update a ${req.params.id} Spot!` });
};

//@desc DELETE a spot
//@route DELETE /api/spots/:id
//@access Public
const deleteSpot = (req, res) => {
  res.status(200).json({ message: `delete a ${req.params.id} Spot!` });
};

module.exports = { getSpots, getSpot, putSpot, postSpot, deleteSpot };
