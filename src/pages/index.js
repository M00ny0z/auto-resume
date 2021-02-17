import React from "react";
import '../../resume.css';
import SEO from "../components/seo";
import Bio from '../components/Bio';
import Projects from '../components/Projects';
import Experiences from '../components/Experiences';
import Tech from '../components/Tech';
import Contact from '../components/Contact';

const IndexPage = () => (
   <div className="d-flex justify-content-center flex-column">
      <SEO title="Portflio"></SEO>
      <header>
         <h1 className="text-left pl-3">Emmanuel "Manny" Munoz</h1>
         <hr />
      </header>

      <div>

         <Bio />

         <Projects />

         <Experiences />

         <Tech />

         <Contact />
      </div>
   </div>
);

export default IndexPage;
