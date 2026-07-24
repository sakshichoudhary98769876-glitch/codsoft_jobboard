import {useParams} from "react-router-dom";

function JobDetails(){

const {id}=useParams();

return(

<div>

<h2>

Job Details

</h2>

<p>

Selected Job ID:

{id}

</p>

</div>

);

}

export default JobDetails;