const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// get ALl Regions
const getAllRegions = async (req, res) => {
  const regions = await prisma.regions.findMany({});
  try {
    res.status(200).json({
      message: "success gated Regions",
      regions,
    });
  } catch (error) {
    res.status(404).json({
      message: "error getting all Regions",
    });
  }
};

// Post New Region
const postNewRegion = async (req, res) => {
  const { region } = req.body;
  const newRegion = await prisma.regions.create({
    data: {
      region,
    },
  });
  try {
    res.status(201).json({
      message: "Region created successfully",
      newRegion,
    });
  } catch (error) {
    res.status(404).json({
      message: "Error creating region",
    });
  }
};

// Update a region
const updateRegion = async (req, res) => {
  const { id } = req.params;
  const { region } = req.body;
  const regionUpdate = await prisma.regions.update({
    where: { regionid: +id },
    data: { region },
  });
  try {
    res.status(200).json({
      message: `Region updated successfully regionId: ${id}`,
    });
  } catch (error) {
    res.status(404).json({
      message: `Region updated Failed regionId: ${id}`,
    });
  }
};

// Delete a region
const deleteRegion = async (req, res) => {
  const { id } = req.params;
  const deleteRegions = await prisma.regions.delete({
    where: {regionid:+id },
  });
  try {
    res.status(200).json({
      message: `Region Delete successfully regionId: ${id}`,
      // deleteRegions
    });
  } catch (error) {
    res.status(404).json({
      message: `Region Delete Failed regionId: ${id}`,
    });
  }
};

module.exports = {
  getAllRegions,
  updateRegion,
  postNewRegion,
  deleteRegion,
};
