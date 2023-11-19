const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllManagers = async (req, res) => {
  const managers = await prisma.manager.findMany({});
  try {
    res.status(200).json({
      message: "Success Managers found ",
      managers,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed managers not found",
    });
  }
};

// Post
const managerPost = async (req, res) => {
  const { managername, manageraddress, managerphone } = req.body;
  const newManager = await prisma.manager.create({
    data: {
        managername,
        manageraddress,
        managerphone
    },
  });
  try {
    res.status(201).json({
      message: " successfully created a new manager",
      newManager
    });
  } catch (error) {
    res.status(404).json({
      message: " error creating a new manager",
    });
  }
};

// Update a manager
const managerUpdate = async(req,res)=>{
    const {id} = req.params
    const {managername,manageraddress,managerphone} = req.body;
    const updateManager = await prisma.manager.update({
        where:{managerid: +id},
        data:{
          managername,
          manageraddress,
          managerphone
        }
    })
    try {
        res.status(200).json({
            message: `success updated managerid : ${id}`
        })
    } catch (error) {
        res.status(404).json({
            message: `error updating managerid:  ${id}`
        })
    }
}
// Delete  a manager

const managerDelete = async(req,res)=>{
    const {id} = req.params
    const updateManager = await prisma.manager.delete({
        where:{managerid: +id}
    })
    try {
        res.status(200).json({
            message: `success Delete managerid : ${id}`
        })
    } catch (error) {
        res.status(404).json({
            message: `error Deleting managerid:  ${id}`
        })
    }
}


module.exports = {
  getAllManagers,
  managerPost,
  managerUpdate,
  managerDelete
};
