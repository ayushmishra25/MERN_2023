// src/components/Courses.js
import React, { useState, useEffect } from 'react';


const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/courses');
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    return (
        <div className="courses-container">
            <h1>Courses</h1>
            {courses.map((course) => (
                <div key={course._id} className="course">
                    <h2>{course.title}</h2>
                    <p>{course.description}</p>
                    <a href={course.youtubeLink} target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
                </div>
            ))}
        </div>
    );
};

export default Courses;
