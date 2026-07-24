const express = require("express");

const router = express.Router();

const {

createJob,

getJobs,

getJob,

updateJob,

deleteJob,

searchJobs

}=require("../controllers/jobController");

router.post("/",createJob);

router.get("/",getJobs);

router.get("/:id",getJob);

router.put("/:id",updateJob);

router.delete("/:id",deleteJob);

router.search("/search",searchJobs);

module.exports=router;