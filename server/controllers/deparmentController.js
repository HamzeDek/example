const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllDepartments = async (req, res) => {
  const department = await prisma.department.findMany({});
  try {
    res.status(200).json({
      message: "Success departments found ",
      department,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed department not found",
    });
  }
};

// Find department
const findDepartment = async(req,res)=>{
  const {id} =req.params;
  const departmentFind = await prisma.department.findUnique({
    where:{departmentid:+id}
  })
  try {
    res.status(200).json({
      message:`Departments with id ${id}`
    })
  } catch (error) {
    res.status(404).json({
      message:  `Departments with id ${id}`
    })
  }
}

// Post
const departmentPost = async (req, res) => {
  const { departmentname} = req.body;
  const newDepartment = await prisma.department.create({
    data: {
        departmentname
    },
  });
  try {
    res.status(201).json({
      message: " successfully created a new department",
      newDepartment
    });
  } catch (error) {
    res.status(404).json({
      message: " error creating a new Department",
    });
  }
};

// Update a manager
const departmentUpdate = async(req,res)=>{
    const {id} = req.params
    const {departmentname }= req.body
    const updateDepartment = await prisma.department.update({
        where:{departmentid:+id},
        data:{departmentname}
    })
    try {
        res.status(200).json({
            message: `success updated departmentId : ${id}`
        })
    } catch (error) {
        res.status(404).json({
            message: `error updating departmentId:  ${id}`
        })
    }
}
// Delete  a manager

const departmentDelete = async(req,res)=>{
    const {id} = req.params
    const department = await prisma.department.delete({
        where:{departmentid:+id}
    })
    try {
        res.status(200).json({
            message: `success Delete departmentId:${id}`
        })
    } catch (error) {
        res.status(404).json({
            message: `error Deleting departmentId:  ${id}`
        })
    }
}


module.exports = {
  getAllDepartments,
  departmentPost,
  departmentUpdate,
  departmentDelete,
  findDepartment
};
