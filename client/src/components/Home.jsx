import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'; // Import the CSS file for Home

const Home = () => {
    return (
        <div className="home-container">
            <h1>Welcome to the Home Page</h1>

            <main className="home-main">
                <section className="features-section">
                    <div className="feature">
                        <h3> My Courses </h3>
                        <p>Learn from youtube experts and boost your career prospects.</p>
                    </div>
                    <div className="feature">
                        <h3> Blogs </h3>
                        <p>Stay updated with the latest placement trends and company news.</p>
                    </div>
                    <div className="feature">
                        <h3> Registrations </h3>
                        <p> Learn from youtube experts and boost your career prospects </p>
                    </div>
                </section>
            </main>
            <footer className="home-footer">
                <p>&copy; {new Date().getFullYear()} Placement Preparation. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
