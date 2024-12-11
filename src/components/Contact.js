import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>
        Feel free to reach out for collaboration, project inquiries, or just to connect!
      </p>
      <ul>
        <li>
          <strong>Email: </strong> yashaswinihu@gmail.com
        </li>
       
        <li>
          <strong>LinkedIn: </strong> 
          <a href=" https://www.linkedin.com/in/yashaswini-hu-a573a9229 " target="_blank" rel="noopener noreferrer">
            linkedin.com/in/yashaswini-hu
          </a>
        </li>
        <li>
          <strong>GitHub: </strong> 
          <a href="https://github.com/YashaswiniHU" target="_blank" rel="noopener noreferrer">
            github.com/YashaswiniHU
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Contact;
