import React from 'react';

const Contact = () => {
   return (
      <div className="container">
         <h3 className="text-center">Contact Info</h3>
         <ul className="list-inline d-flex justify-content-center">
            <li className="list-inline-item">
               <a href="https://github.com/M00ny0z?tab=repositories">
                  <i className="contact fab fa-github fa-5x"></i>
               </a>
            </li>
            <li className="list-inline-item">
               <a href="mailto:1mannymunoz@gmail.com">
                  <i className="contact far fa-envelope fa-5x"></i>
               </a>
            </li>
            <li className="list-inline-item">
               <a href="https://www.linkedin.com/in/m00ny0z/">
                  <i className="contact fab fa-linkedin fa-5x"></i>
               </a>
            </li>
         </ul>
      </div>
   );
};

export default Contact;