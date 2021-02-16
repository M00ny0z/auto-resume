import React from 'react';

const Tech = () => {
   return (
      <div className="container mb-5">
         <h2 className="mb-3">Technologies</h2>
         <ul id="contact" className="list-inline d-flex justify-content-center">
            <li className="list-inline-item tech"><i className="fab fa-git fa-3x"></i></li>
            <li className="list-inline-item tech"><i className="fab fa-html5 fa-3x"></i></li>
            <li className="list-inline-item tech"><i className="fab fa-css3-alt fa-3x"></i></li>
            <li className="list-inline-item tech"><i className="fab fa-js-square fa-3x"></i></li>
            <li className="list-inline-item tech"><i className="fab fa-php fa-3x"></i></li>
            <li className="list-inline-item tech"><i className="fab fa-python fa-3x"></i></li>
            <li className="list-inline-item tech"><i className="fab fa-node-js fa-3x"></i></li>
            <li className="list-inline-item tech"><i className="fab fa-aws fa-3x"></i></li>
            <li className="list-inline-item tech"><i className="fab fa-react fa-3x"></i></li>
         </ul>
      </div>
   );
};

export default Tech;