const express = require("express");

const router = express.Router();

const upload = require("../config/upload");

const {

applyJob,
myApplications,
jobApplicants

}=require("../controllers/applicationController");

router.post(

"/apply",

upload.single("resume"),

applyJob

);

router.get("/candidate/:id",myApplications);

router.get("/job/:id",jobApplicants);

module.exports = router;