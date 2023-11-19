const {PrismaClient} = require('@prisma/client');
const prisma = new PrismaClient();

const getallJobHistory = async(req,res)=>{
    const jobHistory = await prisma.jobhistory.findMany({})
    try {
        res.status(200).json({
            message: "Success Gated all JobHistory",
            jobHistory
        })
    } catch (error) {
        re.status(404).json({
            message: "Job History Error",
        })
    }
}
// FilterJobHistory
const filterJobHistory = async(req,res)=>{
    const {id}=req.params
    const JobHistoryFilter  = await prisma.jobhistory.findUnique({
        where:{jobhistoryid:+id}
    })
    try {
        res.status(200).json({
            message: `JobHistory filter for ${id} was successfully`
        })
    } catch (error) {
        res.status(404).json({
            message:`JobHistory filter for ${id} failed with error ${error}`
        })
    }
}
// PostJobHistory
const postJobHistory = async (req,res)=>{
    const {emplooyeeid,jobid,departmentid} = req.body;
    const newjobHistory = await prisma.jobhistory.create({
        data:{
            emplooyeeid,
            jobid,
            departmentid
        }
    })
    try {
        res.status(200).json({
            message: "success Created jobHistory",
            newjobHistory
        })
    } catch (error) {
        res.status(404).json({
            message: "error creating jobHistory"
        })
    }
}

// Delete job history
const deleteJobHistory = async(req,res)=>{
    const {id} = req.params;
    const jobHistory = await prisma.jobhistory.delete({
        where:{jobhistoryid: +id}
    })
    try {
        res.status(200).json({
            message: `Success Deteled JobHistoryId: ${id}`
        })
    } catch (error) {
        res.status(404).json({
            message: `Error Deleted jobHistoryId: ${id}`
        })
    }
}

module.exports = {
    getallJobHistory,
    filterJobHistory,
    postJobHistory,
    deleteJobHistory
}