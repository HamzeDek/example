const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getAllJobs = async (req, res) => {
  const jobs = await prisma.jobs.findMany({});
  try {
    res.status(200).json({
      message: "Success jobs found ",
      jobs,
    });
  } catch (error) {
    res.status(404).json({
      message: "Failed jobs not found",
    });
  }
};

const findJob= async(req,res)=>{
  const {id} = req.params;
  const jobFind = await prisma.jobs.findUnique({
    where:{jobid:+id}
  })
  try {
    res.status(200).json({
      message: `Job found jobId${id}`
    })
  } catch (error) {
    res.status(404).json({
      message:`Job  not found ${id}`
    })
  }
}

// Post
const jobsPost = async (req, res) => {
  const { jobtitle,minsalary,maxsalary } = req.body;
  const newJob = await prisma.jobs.create({
    data: {
        jobtitle,
        minsalary,
        maxsalary
    },
  });
  try {
    res.status(201).json({
      message: " successfully created a new job",
      newJob
    });
  } catch (error) {
    res.status(404).json({
      message: " error creating a new job",
    });
  }
};

// Update a manager
const jobUpdate = async(req,res)=>{
    const {id} = req.params
    const{jobtitle,minsalary,maxsalary} = req.body;
    const updateJob = await prisma.jobs.update({
        where:{jobid:+id},
        data:{jobtitle,minsalary,maxsalary}
    })
    try {
        res.status(200).json({
            message: `success updated jobId: ${id}`
        })
    } catch (error) {
        res.status(404).json({
            message: `error updating jobId:  ${id}`
        })
    }
}
// Delete  a manager

const jobDelete = async(req,res)=>{
    const {id} = req.params
    const jobDeleted = await prisma.jobs.delete({
        where:{jobid:+id}
    })
    try {
        res.status(200).json({
            message: `success Delete jobId : ${id}`
        })
    } catch (error) {
        res.status(404).json({
            message: `error Deleting jobId:  ${id}`
        })
    }
}


module.exports = {
  getAllJobs,
  jobsPost,
  jobUpdate,
  jobDelete,
  findJob
};
