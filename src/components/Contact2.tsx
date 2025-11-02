import React, { useState } from 'react';
import './contact.ccss.css'; // Optional CSS file for styling

const FormspreeForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    studyYear: '',
    collegeName: '',
    problemQuery: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('https://formspree.io/f/xgvparny', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({
          email: '',
          phone: '',
          studyYear: '',
          collegeName: '',
          problemQuery: ''
        });
      } else {
        setStatus('Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('An error occurred. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="formspree-form">
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="studyYear">Study Year:</label>
          <select
            id="studyYear"
            name="studyYear"
            value={formData.studyYear}
            onChange={handleChange}
            required
          >
            <option value="">Select your study year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="collegeName">College Name:</label>
          <input
            type="text"
            id="collegeName"
            name="collegeName"
            value={formData.collegeName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="problemQuery">Problem/Query:</label>
          <textarea
            id="problemQuery"
            name="problemQuery"
            value={formData.problemQuery}
            onChange={handleChange}
            rows= {4}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
        
        {status && <div className="status-message">{status}</div>}
      </form>
    </div>
  );
};

export default FormspreeForm;