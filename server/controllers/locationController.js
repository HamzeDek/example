const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// get all a Locations
const getAllLocation = async (req, res) => {
  const Locations = await prisma.locations.findMany({});
  try {
    res.status(200).json({
      message: "Success Locations found ",
      Locations,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed Locations not found",
    });
  }
};

// Post a new Location
const locationPost = async (req, res) => {
  const { address, state, postcode} = req.body;
  const newLocation = await prisma.locations.create({
    data: {
      address,
      state,
      postcode,
    },
  });
  try {
    res.status(201).json({
      message: " successfully created a new location",
      newLocation,
    });
  } catch (error) {
    res.status(404).json({
      message: " error creating a new location",
    });
  }
};

// Update a location
const locationUpdate = async (req, res) => {
  const { id } = req.params;
  const{address,postcode,state} = req.body;
  const updateLocations = await prisma.locations.update({
    where: { locationid: +id },
    data:{
      address,
      postcode,
      state
    }
  });
  try {
    res.status(200).json({
      message: `success updated locationId : ${id}`,
    });
  } catch (error) {
    res.status(404).json({
      message: `error updating locationId:  ${id}`,
    });
  }
};
// Delete  a location

const locationDelete = async (req, res) => {
  const { id } = req.params;
  const deleteLocation = await prisma.locations.delete({
    where: { locationid: +id },
  });
  try {
    res.status(200).json({
      message: `success Delete locationId : ${id}`,
    });
  } catch (error) {
    res.status(404).json({
      message: `error Deleting locationId:  ${id}`,
    });
  }
};

module.exports = {
  getAllLocation,
  locationPost,
  locationUpdate,
  locationDelete,
};
