const Application = require("../models/Application");

const transporter = require("../config/email");

exports.applyJob = async(req,res)=>{

    try{

        const application = await Application.create({

            candidate:req.body.candidate,

            job:req.body.job,

            resume:req.file.filename,

            coverLetter:req.body.coverLetter

        });

        await transporter.sendMail({

    from: process.env.EMAIL,

    to: "candidate@gmail.com",

    subject: "Job Application Received",

    text: "Your application has been submitted successfully."

   });

        res.status(201).json({

            message:"Application Submitted Successfully",

            application

        });

    }

    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};

exports.myApplications = async(req,res)=>{

const applications = await Application.find({

candidate:req.params.id

}).populate("job");

res.json(applications);

};

exports.jobApplicants = async(req,res)=>{

const applicants = await Application.find({

job:req.params.id

}).populate("candidate");

res.json(applicants);

};