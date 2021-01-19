import React from 'react';

const Authors = () => {
  return(
    <div>
    <section className="section-3">
      <div className="container boxes mt-5 py-4">
        <div className="row ">
          <div className="col-md-1"></div>
          <div className="col-12 col-md-3 text-center pt-2">
            <img src="https://avatars2.githubusercontent.com/u/71146674?s=460&u=6be55464d1fd08b1fa023e27d9242c05960aa64f&v=4" alt="" />
          </div>
          <div className="col-12 col-md-7">
            <div className="textDavid">


            <h3>David Torres</h3>
            <h6>Industrial Engineer</h6>
    </div>
            <br />

            <div className="text-justify centername">


            <h6>I'm a self-taught programmer who likes to be involved in interesting projects specially related to the healthcare industry.
              We hope that by creating this project we can increase more awareness relating COVID-19.
              I was responsible for the data analysis through Pandas Dataframes. Enjoy the Website!</h6>
              </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <div className="container boxes mt-5 mb-5 py-4">
        <div className="row ">
          <div className="col-md-1"></div>
          <div className="col-12 col-md-7">
            <div className="textIvan">
              <h3>Iván Vázquez</h3>
                              <h6>Software Engineer</h6>

    </div>
            <br />

            <div className="text-justify centername">


            <h6>I'm interested in web development and learning new languages. In this project, we wanted to use
             Pandas to retrieve data from csv files and we decided to use Flask,as the backend, where we 
             manipulated the data and then we send it to our React frontend.</h6>
              </div>
          </div>
          <div className="col-12 col-md-3 text-center pt-2 order-first order-md-2">
            <img src="https://avatars3.githubusercontent.com/u/20480122?s=460&u=e1bee1d2975d736862017a030c6c4cb40b99978c&v=4" alt="" />
          </div>
          <div className="col-md-1 order-md-last"></div>
        </div>
      </div>

    </section>
    </div>
  );
}

export default Authors
