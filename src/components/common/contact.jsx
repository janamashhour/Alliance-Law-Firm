import { useState } from "react";
import './contact.css';

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: ""
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert("Form submitted!");
    console.log(formData);
  }

  return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
            <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-row">
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
          </div>
          <textarea name="message" placeholder="Write a message" rows="6" value={formData.message} onChange={handleChange} required></textarea>
          <button type="submit">Request consultation</button>
        </form>
      </div>
  );
}

export default Contact;