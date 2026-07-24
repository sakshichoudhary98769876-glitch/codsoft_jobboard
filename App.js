import { Routes, Route } from "react-router-dom";

import "./App.css"

import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Jobs from "./Jobs";
import JobDetails from "./JobDetails";
import Dashboard from "./Dashboard";
import Loader from "./components/Loader"

function App() {

  return (

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/jobs" element={<Jobs />} />
  <Route path="/job/:id" element={<JobDetails />} />
  <Route path="/dashboard" element={<Dashboard />} />
  <Route path="/Loader" element={<Loader />} />
</Routes>
);
}

export default App;
