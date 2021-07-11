import React from 'react';

const Experiences = () => {
   return (
      <div className="container mb-5" id="experiences">
            <h2 className="mb-3">Previous Experiences</h2>
            <div className="d-flex flex-row flex-wrap justify-content-around">               
               
               <div className="card mb-4 bg-exp" style={{width: '18rem'}}>
                  <div className="card-body">
                     <h5 className="card-title">Bioinformatics Research Intern</h5>
                     <h6 className="card-subtitle mb-3 border-bottom border-white border-5">
                        Statistical Physics of Evolving Systems Lab
                     </h6>
                     <p className="card-text">
                        Ran Data Analysis on gene sequencing of HIV-1 patients to study long-term B-cell response
                     </p>
                  </div>
               </div>

               <div className="card mb-4 bg-exp" style={{width: '18rem'}}>
                  <div className="card-body">
                     <div className="d-flex flex-column justify-content-between">
                        <h5 className="card-title">Software Engineer Intern</h5>
                        <h6 className="card-subtitle mb-3 border-bottom border-white border-5">
                           Oracle Cloud Infrastructure
                        </h6>
                     </div>
                     <p className="card-text">
                        Used Terraform, Java, and Golang to automate OCI cloud compute instance 
                        health alarms and monitoring
                     </p>
                     <p className="card-text">
                        Used Grafana to display compute instance health status and usage data
                     </p>
                  </div>
               </div>

               <div className="card mb-4 bg-exp" style={{width: '18rem'}}>
                  <div className="card-body">
                     <div className="d-flex flex-column justify-content-between">
                        <h5 className="card-title">Software Engineer Intern</h5>
                        <h6 className="card-subtitle mb-3 border-bottom border-white border-5">
                           Namatad Inc.
                        </h6>
                     </div>
                     <p className="card-text">
                        Developed a marketing site using Gatsby to showcase company information 
                        and a Content-Management-Site (CMS) using React for non-developers to 
                        easily update marketing information.
                     </p>

                     <p className="card-text">
                        Desgined and implemented a REST API to service an in-house CMS to update 
                        marketing site.
                     </p>

                     <p className="card-text">
                        Built and developed overall project infrastructure utilizing AWS Lambda, 
                        Amplify, and S3 focusing on low-cost and auto-scaling.
                     </p>
                  </div>
               </div>

               <div className="card mb-4 bg-exp" style={{width: '18rem'}}>
                  <div className="card-body">
                     <div className="d-flex flex-column justify-content-between">
                        <h5 className="card-title">Teacher's Assistant (CSE154)</h5>
                        <h6 className="card-subtitle mb-3 border-bottom border-white border-5">
                           Paul G. Allen School of Computer Science and Engineering
                        </h6>
                     </div>
                     <p className="card-text">
                        Lead a bi-weekly class of ~15 students going in-depth into lecture material.
                     </p>
                     <p className='card-text'>
                        Helped create new class material for the transition to teach new back-end 
                        language.
                     </p>
                  </div>
               </div>

               <div className="card mb-4 bg-exp" style={{width: '18rem'}}>
                  <div className="card-body">
                     <div className="d-flex flex-column justify-content-between mb-3">
                        <h5 className="card-title">Web Developer (Full-Stack)</h5>
                        <h6 className="card-subtitle mb-3 border-bottom border-white border-5">
                           Student Life Department (UWT)
                        </h6>
                     </div>
                     <p className="card-text">
                        Created a full-stack web application that allows students to see currently 
                        available resources.
                     </p>
                     <p className="card-text">
                        Created a Content Management System that allows advisors
                        to update the site without writing code. Both built with HTML/CS/JS for the 
                        front-end and PHP/SQL for the back-end.
                     </p>
                  </div>
               </div>

               <div className="card mb-4 bg-exp" style={{width: '18rem'}}>
                  <div className="card-body">
                     <h5 className="card-title">CS Educator/Mentor</h5>
                     <h6 className="card-subtitle mb-3 border-bottom border-white border-5">
                        Neighborhood House
                     </h6>
                     <p className="card-text">
                        Mentored youth and tought basic CS principles through robotics
                     </p>
                  </div>
               </div>
         </div>
      </div>
   );
};

export default Experiences;