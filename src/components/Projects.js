import React from 'react';

const Projects = () => {
   return (
      <div className="container d-flex flex-column mb-5" id="projects">
      <h2 className="mb-3">Projects I've worked on</h2>

         <a className="jumbotron jumbotron-fluid bg-prj rounded" href="https://depts.washington.edu/uwtslwebdev/ResourceTracker/">
            <div className="container">
               <h1 className="display-4 mb-4 text-wrap container">Resource Tracker</h1>
               <p className="lead">
                  Resource-Tracker allows students to view the currently available resources 
                  they can utilize.
               </p>
            </div>
         </a>

         <a className="jumbotron jumbotron-fluid bg-prj rounded" href="https://huskyprep.me">
            <div className="container">
               <h1 className="display-4 mb-4">HuskyPrep</h1>
               <p className="lead">
                  HuskyPrep allows students to practice previous exam problems for weed out classes
                  with answers and solution steps provided by tutors.
               </p>
            </div>
         </a>
         
         <a className="jumbotron jumbotron-fluid bg-prj rounded" href="http://students.washington.edu/em66/UWTU/">
            <div className="container">
               <h1 className="display-4 mb-4 text-wrap">UW Tutoring</h1>
               <p className="lead">
                  UW-Tutoring asks a new student what classes they are having trouble with and gives a
                  list of all the on-campus tutoring centers that specialize in that subject.
               </p>
            </div>
         </a>
   </div>
   );
};

export default Projects;