import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          At [Your Website Name], our mission is to empower students with the skills and knowledge they need to excel in their placement interviews and secure their dream jobs. We understand the challenges that come with job hunting and aim to provide a comprehensive platform to bridge the gap between academic knowledge and real-world job requirements.
        </p>
      </section>
      <section className="who-we-are">
        <h2>Who We Are</h2>
        <p>
          We are a team of passionate educators, industry professionals, and technology enthusiasts dedicated to creating the best placement preparation resources. Our team combines expertise in various fields, including career coaching, technology, and education, to deliver high-quality content and tools that cater to the needs of students across different disciplines.
        </p>
      </section>
      <section className="what-we-offer">
        <h2>What We Offer</h2>
        <ul>
          <li>Comprehensive Courses: Our platform offers a range of courses designed to cover essential topics and skills needed for placement success.</li>
          <li>Expert Guidance: Benefit from the knowledge and experience of our industry experts through personalized coaching and mentorship sessions.</li>
          <li>Latest Updates: Stay informed with the latest news and trends in the job market.</li>
          <li>Interactive Tools: Utilize our interactive tools and resources to enhance your preparation.</li>
        </ul>
      </section>
      <section className="vision">
        <h2>Our Vision</h2>
        <p>
          We envision a world where every student has access to high-quality placement preparation resources, enabling them to achieve their career goals and contribute to the workforce with confidence.
        </p>
      </section>
      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li>Integrity: We uphold the highest standards of honesty and transparency.</li>
          <li>Excellence: We are committed to delivering exceptional quality.</li>
          <li>Innovation: We continuously seek innovative solutions to improve our offerings.</li>
          <li>Empathy: We provide support and encouragement throughout the career journey.</li>
        </ul>
      </section>
      <section className="contact">
        <h2>Get in Touch</h2>
        <p>
          We would love to hear from you! If you have any questions, feedback, or suggestions, please feel free to reach out to us at <a href="mailto:your-email@example.com">your-email@example.com</a>.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;

