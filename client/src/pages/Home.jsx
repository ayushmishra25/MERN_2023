import { Navbar } from "../components/Navbar";
import { Analytics } from "../components/Analytics"; // Assuming Analytics component is in your components folder

export const Home = () => {
    return (
        <>
          <main>
            <section className="section-hero">
                <div className="container grid grid-two-cols">
                    <div className="hero-content">
                        <p>We are the World Best Placement Website</p>
                        <h1>Welcome to PlacementPathway</h1>
                        <p>
                        The Placement Pathway website, developed using the MERN stack (MongoDB, Express.js, React.js, Node.js), 
                        is a comprehensive platform designed to assist students in preparing for placements. It offers a range 
                        of services including courses, company updates, and preparation materials tailored for campus recruitment. 
                        The website features a user-friendly interface with pages such as Home, Courses, Services, Login, and Register, 
                        ensuring easy navigation and access to valuable resources. By integrating JWT for secure user authentication and 
                        APIs to provide the latest placement news and YouTube videos, the platform serves as a one-stop solution for students 
                        looking to succeed in their placement journey.
                        </p>
                        <div className="btn btn-group">
                            <a href="/contact">
                            <button className="btn">Contact Now</button>
                            </a>
                            <a href="/service">
                            <button className="btn secondary-btn">Learn Now</button>
                            </a>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="/images/registration.png" alt="coding together" width="400" height="400"/>
                    </div>
                </div>
            </section>
          </main>  

          {/* Second section */}
          <Analytics />
        </>
    );
};
