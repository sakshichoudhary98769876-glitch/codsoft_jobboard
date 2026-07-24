import {useEffect,useState} from "react";

import axios from "axios";

<input

type="text"

placeholder="Search Jobs"

/>

function Jobs(){

const [jobs,setJobs]=useState([]);

useEffect(()=>{

loadJobs();

},[]);

const loadJobs=async()=>{

const res=await axios.get(

"http://localhost:5000/api/jobs"

);

setJobs(res.data);

};

return(

<div>

<h2>Available Jobs</h2>

{

jobs.map(job=>(

<div key={job._id}>

<h3>{job.title}</h3>

<p>{job.company}</p>

<p>{job.location}</p>

<p>{job.salary}</p>

</div>

))

}

</div>

);

}

export default Jobs;