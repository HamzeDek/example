const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllCountries = async (req, res) => {
  const Countries = await prisma.countries.findMany({});
  try {
    res.status(200).json({
      message: "Success Countries found ",
      Countries,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed Countries not found",
    });
  }
};

// Post
const CountryPost = async (req, res) => {
  const { country } = req.body;
  const newCountry = await prisma.countries.create({
    data: {
         country
    },
  });
  try {
    res.status(201).json({
      message: " successfully created a new Country",
      newCountry
    });
  } catch (error) {
    res.status(404).json({
      message: " error creating a new Country",
    });
  }
};

// Update a manager
const CountryUpdate = async(req,res)=>{
    const {id} = req.params
    const {country} =req.body; 
    const updateCountry = await prisma.Countries.update({
        where:{countryid: +id},
        data:{
          country
        }
    })
    try {
        res.status(200).json({
            message: `success updated CountryId : ${id}`
        })
    } catch (error) {
        res.status(404).json({
            message: `error updating CountryId:  ${id}`
        })
    }
}
// Delete  a manager

const countryDelete = async(req,res)=>{
    const {id} = req.params
    const updateCountry = await prisma.countries.delete({
        where:{countryid: +id}
    })
    try {
        res.status(200).json({
            message: `success Delete CountryId : ${id}`
        })
    } catch (error) {
        res.status(404).json({
            message: `error Deleting CountryId:  ${id}`
        })
    }
}


module.exports = {
  getAllCountries,
  CountryPost,
  CountryUpdate,
  countryDelete
};
