const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllEmplooyee = async (req, res) => {
  const emplooyee = await prisma.emplooyee.findMany({});
  try {
    res.status(200).json({
      message: "Success emplooyee found ",
      emplooyee,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed emplooyee not found",
    });
  }
};

// Post
const emplooyeePost = async (req, res) => {
  const { firstname, lastname, email,phone,dob,commisition } = req.body;
  const newEmplooyee = await prisma.emplooyee.create({
    data: {
        firstname,
        lastname,
        email,
        phone,
        dob,
        commisition,
          departmentid,
          managerid,
    },
  });
  try {
    res.status(201).json({
      message: " successfully created a new emplooyee",
      newEmplooyee
    });
  } catch (error) {
    res.status(404).json({
      message: " error creating a new Emplooyee",
    });
  }
};

// Update a manager
const emplooyeeUpdate = async(req,res)=>{
    const {id} = req.params
    const updateEmplooyee = await prisma.emplooyee.update({
        where:{emplooyeeid: +id}
    })
    try {
        res.status(200).json({
            message: `success updated EmplooyeeId : ${id}`
        })
    } catch (error) {
        res.status(404).json({
            message: `error updating EmplooyeeId:  ${id}`
        })
    }
}
// Delete  a manager

const EmplooyeeDelete = async(req,res)=>{
    const {id} = req.params
    const DeleteEmplooyee = await prisma.emplooyee.delete({
        where:{emplooyeeid: +id}
    })
    try {
        res.status(200).json({
            message: `success Delete EmplooyeeId : ${id}`
        })
    } catch (error) {
        res.status(404).json({
            message: `error Deleting EmplooyeeId:  ${id}`
        })
    }
}


module.exports = {
  getAllEmplooyee,
  emplooyeePost,
  emplooyeeUpdate,
  EmplooyeeDelete
};
