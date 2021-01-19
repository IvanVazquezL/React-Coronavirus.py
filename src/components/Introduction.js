import React from 'react';

const Introduction = () => {
  return(
    <div>
    <section className="section-1">
  <div className="container pt-5 pb-5">
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <h3 className="text-center">How it all started</h3>
        <div className="p-3 text-justify">
          <p>The first cases of COVID-19 were first reported by officials of Wuhan, China, in December 2019. The disease appears to have originated from a Wuhan seafood market where wild animals are traded illegally. </p>
          <p>What started as an epidemic, mainly restrited to China, has now become a global pandemic. The disease has been detected in more than 200 countries. We hope this website helps to understand the severity of this disease and the responses
            of different countries towards COVID-19.</p>
        </div>
      </div>
      <div className="col-md-3"></div>
    </div>
    <div className="row">
      <div className="col-md-3"></div>
      <div className="col-md-6">
        <h3 className="pl-3">What can you find in this page?</h3>
        <ul>
     <li>
       <h6>
         <a href="#graph1">
           Countries that have been infected the most
         </a>
       </h6>
     </li>
     <li>
       <h6>
         <a href="#graph2">
           Countries with the highest number of deceased
         </a>
       </h6>
     </li>
     <li>
       <h6>
         <a href="#graph3">
           Best Global Responses to COVID-19
         </a>
       </h6>
     </li>
     <li>
       <h6>
         <a href="#graph4">
   Countries with most cases per million
   </a>
       </h6>
     </li>
     <li>
       <h6>
         <a href="#graph5">
         Percentage of population that got COVID-19
         </a>
       </h6>
     </li>
     <li>
       <h6>
         <a href="#graph6">
         Countries with the highest Case Fatality Rate
         </a>
       </h6>
     </li>
   </ul>
      </div>
      <div className="col-md-3"></div>
    </div>
  </div>

</section>
    </div>
  );
}

export default Introduction;
