import "./home.css";

import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    return (

        <>

            <section className="hero">

                <h1>Find Your Dream Job</h1>

                <p>Search thousands of jobs from top companies.</p>
                <button onClick={() => navigate("/jobs")}>
                    Browse Jobs 
                    </button>

            </section>

            <section className="search">

                <input

                    type="text"

                    placeholder="Search jobs..."

                />

                <button>Search</button>

            </section>

            <section className="featured">

                <h2>Featured Jobs</h2>

                <div className="cards">

                    <div className="card">

                        <h3>Frontend Developer</h3>

                        <p>Google</p>

                        <p>₹8 LPA</p>

                        <button>Apply</button>

                    </div>

                    <div className="card">

                        <h3>Backend Developer</h3>

                        <p>Microsoft</p>

                        <p>₹10 LPA</p>

                        <button>Apply</button>

                    </div>

                    <div className="card">

                        <h3>Full Stack Developer</h3>

                        <p>Amazon</p>

                        <p>₹12 LPA</p>

                        <button>Apply</button>

                    </div>

                </div>

            </section>

        </>

    );

}

export default Home;