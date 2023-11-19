const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllAttendance = async (req, res) => {
  const Attendance = await prisma.attendances.findMany({});
  try {
    res.status(200).json({
      message: "Success Attendance found ",
      Attendance,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed attendance not found",
    });
  }
};

// Post
const attendancePost = async (req, res) => {
  const { absent, present, shift } = req.body;
  const newAttendance = await prisma.attendances.create({
    data: {
        absent,
        present,
        shift
    },
  });
  try {
    res.status(201).json({
      message: " successfully created a new attendance",
      newAttendance
    });
  } catch (error) {
    res.status(404).json({
      message: " error creating a new Attendance",
    });
  }
};

// Update a manager
const AttendanceUpdate = async(req,res)=>{
    const {id} = req.params
    const{absent,present,shift} = req.body;
    const updateAttendance = await prisma.attendances.update({
        where:{attendanceid: +id},
        data:{
          absent,
          present,
          shift
        }
    })
    try {
        res.status(200).json({
            message: `success updated Attendance : ${id}`
        })
    } catch (error) {
        res.status(404).json({
            message: `error updating attendance:  ${id}`
        })
    }
}
// Delete  a manager

const attendanceDelete = async(req,res)=>{
    const {id} = req.params
    const updateAttendance = await prisma.attendances.delete({
        where:{attendanceid: +id}
    })
    try {
        res.status(200).json({
            message: `success Delete attendance : ${id}`
        })
    } catch (error) {
        res.status(404).json({
            message: `error Deleting attendance:  ${id}`
        })
    }
}


// Find Attendances
const findAttendances = async(req,res)=>{
  const {id} = req.params;
  const attendanceFind = await prisma.attendances.findUnique({
    where:{attendanceid:+id}
  })
  try {
    res.status(200).json({
      message: `Attendance found for ${id}`
    })
  } catch (error) {
    res.status(404).json({
    message: `Attendance found for ${id}`  
    })
  }
}

module.exports = {
  getAllAttendance,
  attendancePost,
  AttendanceUpdate,
  attendanceDelete,
  findAttendances
};
