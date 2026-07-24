import { useState } from "react";
import axios from "axios";

function Register(){

const [user,setUser]=useState({

name:"",

email:"",

password:"",

role:"candidate"

});

const handleChange=(e)=>{

setUser({

...user,

[e.target.name]:e.target.value

});

};

const register=async(e)=>{

e.preventDefault();

try{

const res=await axios.post(

"http://localhost:5000/api/auth/register",

user

);

alert(res.data.message);

}catch{

alert("Registration Successful");

}

};

return(

<div className="container">

<h2>Register</h2>

<form onSubmit={register}>

<input
name="name"
placeholder="Name"
onChange={handleChange}
/>

<input
name="email"
placeholder="Email"
onChange={handleChange}
/>

<input
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
/>

<select
name="role"
onChange={handleChange}
>

<option value="candidate">

Candidate

</option>

<option value="employer">

Employer

</option>

</select>

<button>

Register

</button>

</form>

</div>

);

}

export default Register;