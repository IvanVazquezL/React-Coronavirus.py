import React,{useState,useEffect} from 'react';
import Chart from 'chart.js'

const Information = () => {
  const [countries,setCountries] = useState([]);
  const [values,setValues] = useState([]);
  const [locationtable1,setLocationtable1] = useState([]);
  const [total_deathstable1,setTotal_deathstable1] = useState([]);
  const [locationbc2t2,setLocationbc2t2] = useState([]);
  const [total_casesbc2t2,setTotal_casesbc2t2] = useState([]);
  const [locationtable3,setLocationtable3] = useState([]);
  const [total_cases_per_milliontable3,setTotal_cases_per_milliontable3] = useState([]);
  const [locationtable4,setLocationtable4] = useState([]);
  const [sick_population,setSick_population] = useState([]);
  const [locationtable5,setLocationtable5] = useState([]);
  const [case_fatality_ratio,setCase_fatality_ratio] = useState([]);
  const [caseFatalityWorld,setCaseFatalityWorld] = useState(0);


  useEffect(()=>{
    fetch('/index')
    .then(res=>res.json())
    .then(data =>{
      setCountries(data.countries);
      setValues(data.values);
      setLocationtable1(data.locationtable1);
      setTotal_deathstable1(data.total_deathstable1);
      setLocationbc2t2(data.locationbc2t2);
      setTotal_casesbc2t2(data.total_casesbc2t2);
      setLocationtable3(data.locationtable3);
      setTotal_cases_per_milliontable3(data.total_cases_per_milliontable3);
      setLocationtable4(data.locationtable4);
      setSick_population(data.sick_population);
      setLocationtable5(data.locationtable5);
      setCase_fatality_ratio(data.case_fatality_ratio);
      setCaseFatalityWorld(data.caseFatalityWorld);

    });
  },[]);

  // Start Top 10 coronavirus chart
  useEffect(() =>{
      var ctx = document.getElementById('chartTop10Cases').getContext("2d");
      var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: countries ,
          datasets : [{
               fillColor: "rgba(151,187,205,1)",
               strokeColor: "rgba(151,187,205,1)",
               pointColor: "rgba(151,187,205,1)",
               backgroundColor: "rgba(151,187,205,0.2)",
               borderColor:"rgba(151,187,205,1)",
               borderWidth:2,
               label: "Total number of COVID-19 cases",
               data : values
                    }


                      ],
      },
      options: {
                               responsive: true,
                               maintainAspectRatio: false,

                           tooltips: {
                             callbacks: {
                                   label: function(tooltipItem, data) {

                                       var value = data.datasets[0].data[tooltipItem.index];
                                       if(parseInt(value) >= 1000){
                                                  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                               } else {
                                                  return value;
                                               }
                                   }
                             } // end callbacks:
                           }, //end tooltips
          scales: {
                                       yAxes: [{
                                           ticks: {
                                               beginAtZero:true,
                                               callback: function(value, index, values) {
                                                   if(parseInt(value) >= 1000){
                                                      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                                   } else {
                                                      return value;
                                                   }
                                              }
                                           }
                                       }]
          }


        }

    });
    //End Top 10 Coronavirus cases chart

    //Top 10 Deaths Chart
     var ctx = document.getElementById('chartTop10Deaths').getContext("2d");
     var myChart1 = new Chart(ctx, {
     type: 'bar',
     data: {
       labels: locationtable1 ,
       datasets : [{
            fillColor: "rgba(151,187,205,1)",
            strokeColor: "rgba(151,187,205,1)",
            pointColor: "rgba(151,187,205,1)",
            backgroundColor: "rgba(151,187,205,0.2)",
            borderColor:"rgba(151,187,205,1)",
            borderWidth:2,
            label: "Total number of COVID-19 deaths",
            data : total_deathstable1
                 }


                   ],
     },
     options: {
                            responsive: true,
                            maintainAspectRatio: false,

                        tooltips: {
                          callbacks: {
                                label: function(tooltipItem, data) {

                                    var value = data.datasets[0].data[tooltipItem.index];
                                    if(parseInt(value) >= 1000){
                                               return "Deaths: "+value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                            } else {
                                               return "Deaths: "+value;
                                            }
                                }

                          } // end callbacks:
                        }, //end tooltips
       scales: {
                                    yAxes: [{
                                        ticks: {
                                            beginAtZero:true,
                                            callback: function(value, index, values) {
                                                if(parseInt(value) >= 1000){
                                                   return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                                } else {
                                                   return value;
                                                }
                                           }
                                        }
                                    }]
       }


     }

     });
     //End Top 10 coronavirus Deaths chart

     //Start Top 7 Best Responses Chart
      var ctx = document.getElementById('chartTop7Responses').getContext("2d");
      var myChart2 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: locationbc2t2,
        datasets : [{
             fillColor: "rgba(151,187,205,1)",
             strokeColor: "rgba(151,187,205,1)",
             pointColor: "rgba(151,187,205,1)",
             backgroundColor: "rgba(151,187,205,0.2)",
             borderColor:"rgba(151,187,205,1)",
             borderWidth:2,
             label: "Total number of COVID-19 cases",
             data : total_casesbc2t2
                  }


                    ],
      },
      options: {
                             responsive: true,
                             maintainAspectRatio: false,

                         tooltips: {
                           callbacks: {
                                 label: function(tooltipItem, data) {

                                     var value = data.datasets[0].data[tooltipItem.index];
                                     if(parseInt(value) >= 1000){
                                                return "Total Cases: "+value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                             } else {
                                                return "Total Cases: "+value;
                                             }
                                 }
                           } // end callbacks:
                         }, //end tooltips
        scales: {
                                     yAxes: [{
                                         ticks: {
                                             beginAtZero:true,
                                             callback: function(value, index, values) {
                                                 if(parseInt(value) >= 1000){
                                                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                                 } else {
                                                    return value;
                                                 }
                                            }
                                         }
                                     }]
        }


      }

      });
      //End Top 7 Best Responses Chart

      // Start Top 10 Cases per Million chart
      var ctx = document.getElementById('chartTotalCasesPerMillion').getContext("2d");
      var myChart3 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: locationtable3,
        datasets : [{
             fillColor: "rgba(151,187,205,1)",
             strokeColor: "rgba(151,187,205,1)",
             pointColor: "rgba(151,187,205,1)",
             backgroundColor: "rgba(151,187,205,0.2)",
             borderColor:"rgba(151,187,205,1)",
             borderWidth:2,
             label: "Cases per Million",
             data : total_cases_per_milliontable3
                  }


                    ],
      },
      options: {
                             responsive: true,
                             maintainAspectRatio: false,

                         tooltips: {
                           callbacks: {
                                 label: function(tooltipItem, data) {

                                     var value = data.datasets[0].data[tooltipItem.index];
                                     if(parseInt(value) >= 1000){
                                                return "Cases per Million: "+value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                             } else {
                                                return "Cases per Million: "+value;
                                             }
                                 },
                           } // end callbacks:
                         }, //end tooltips
        scales: {
                                     yAxes: [{
                                         ticks: {
                                             beginAtZero:true,
                                             callback: function(value, index, values) {
                                                 if(parseInt(value) >= 1000){
                                                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                                 } else {
                                                    return value;
                                                 }
                                            }
                                         }
                                     }]
        }


      }

      });
      // End Top 10 Cases per Million chart

      // Start Sick Population Percentage chart
      var ctx = document.getElementById('chartSickPopulationPercentage').getContext("2d");
      var myChart4 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: locationtable4,
        datasets : [{
             fillColor: "rgba(151,187,205,1)",
             strokeColor: "rgba(151,187,205,1)",
             pointColor: "rgba(151,187,205,1)",
             backgroundColor: "rgba(151,187,205,0.2)",
             borderColor:"rgba(151,187,205,1)",
             borderWidth:2,
             label: "Percentage of Population that got Covid",
             data : sick_population
                  }


                    ],
      },
      options: {
                             responsive: true,
                             maintainAspectRatio: false,

                         tooltips: {
                           callbacks: {
                                 label: function(tooltipItem, data) {

                                     var value = data.datasets[0].data[tooltipItem.index];
                                     if(parseInt(value) >= 1000){
                                                return "Percentage of Population that got Covid: "+value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+" %";
                                             } else {
                                                return "Percentage of Population that got Covid: "+value +" %";
                                             }
                                 }
                           } // end callbacks:
                         }, //end tooltips
        scales: {
                                     yAxes: [{
                                         ticks: {
                                             beginAtZero:true,
                                             callback: function(value, index, values) {
                                                 if(parseInt(value) >= 1000){
                                                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                                 } else {
                                                    return value;
                                                 }
                                            }
                                         }
                                     }]
        }


      }

      });
      // End Sick Population Percentage chart

      // Start Fatality Case Ratio chart
      var ctx = document.getElementById('chartFatalityCaseRatio').getContext("2d");
      var myChart5 = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: locationtable5,
        datasets : [{
             fillColor: "rgba(151,187,205,1)",
             strokeColor: "rgba(151,187,205,1)",
             pointColor: "rgba(151,187,205,1)",
             backgroundColor: "rgba(151,187,205,0.2)",
             borderColor:"rgba(151,187,205,1)",
             borderWidth:2,
             label: "Case Fatality Rate",
             data : case_fatality_ratio
                  }


                    ],
      },
      options: {
                             responsive: true,
                             maintainAspectRatio: false,

                         tooltips: {
                           callbacks: {
                                 label: function(tooltipItem, data) {

                                     var value = data.datasets[0].data[tooltipItem.index];
                                     if(parseInt(value) >= 1000){
                                                return "Case Fatality Rate: "+value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+"%";
                                             } else {
                                                return "Case Fatality Rate: "+value+"%";
                                             }
                                 }
                           } // end callbacks:
                         }, //end tooltips
        scales: {
                                     yAxes: [{
                                         ticks: {
                                             beginAtZero:true,
                                             callback: function(value, index, values) {
                                                 if(parseInt(value) >= 1000){
                                                    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                                                 } else {
                                                    return value;
                                                 }
                                            }
                                         }
                                     }]
        }


      }

      });
      // End Fatality Case Ratio chart
  });




  return(
    <div>
      <section className="section-2 pb-5">
      {/*Start Top 10 coronavirus chart*/}
        <div className="container">
          <div className="row">
            <h3 id = "graph1" className="pl-3 pt-5 mb-3">Countries that have been infected the most</h3>
          </div>
          <div className="boxes">


            <div className="row p-4">
              <div className="col-12 col-md-6 ">
                <div>
                     <canvas className="sizeChart" id="chartTop10Cases"></canvas>
                </div>
              </div>
              <div className="textChart col-12 col-md-6 text-justify pr-4">
                <h6>COVID-19 has been declared a pandemic by the WHO <b>(World Health Organization)</b> since <b>March 11 of 2020</b>.
                         Obviously, larger countries tend to have higher numbers both of cases and of deaths. However, there are
                         many factors involved: population, countries with ageing population may hit harder because COVID-19 is
                         more dangerous to older population. </h6>
                       <br />
                       <h6>In the <a href="https://www.who.int/dg/speeches/detail/who-director-general-s-opening-remarks-at-the-media-briefing-on-covid-19---11-march-2020">following link</a> you’ll find the words from <b>Dr. Tedros Adhanom Ghebreyesus,</b>
                         <b>Director General of the World Health Organization.</b> In this letter he writes the following:</h6>
                       <br />
                       <h6><i>"WHO has been assessing this outbreak around the clock and we are deeply concerned both by the alarming
                         levels of spread and severity, and by the <b>alarming levels of inaction</b>. We have therefore made the assessment
                         that COVID-19 can be characterized as a pandemic. <br /> <br /> Pandemic is not a word to use lightly or carelessly.
                         It is a word that, if misused, can cause unreasonable fear, or unjustified acceptance that the fight is over,
                         leading to unnecessary suffering and death."<br />
                         World Health Organization</i></h6>
              </div>
            </div>
          </div>
        </div>
        {/*End Top 10 coronavirus chart*/}

        {/* Start Top 10 Deaths Coronavirus chart */}
        <div className="container">
          <div className="row">
            <h3 id = "graph2" className="pl-3 pt-5 mb-3">Countries with the highest number of deceased</h3>
          </div>
          <div className="boxes">


          <div className="row p-4">
            <div className="col-12 col-md-6 ">
              <div>
                   <canvas className="sizeChart" id="chartTop10Deaths"></canvas>
              </div>
            </div>
            <div className="textChart col-12 col-md-6  text-justify pt-5 pr-4">
              <h6>According to Our World in Data, the actual total death toll from COVID-19 is <b>likely to be
                       higher than the number of confirmed deaths</b> this is due to limited testing and problems in the
                       attribution of the cause of death.  </h6>
                     <br />
                     <h6>How COVID-19 deaths are recorded may differ between countries <b>(e.g. some countries may only count hospital deaths,
                       whilst others have started to include deaths in homes)</b>.</h6>
                     <br />
                     <h6>The widely available data on confirmed cases only become meaningful when it can be interpreted considering how much a country is testing.</h6>
            </div>
          </div>
          </div>
        </div>
        {/* End Top 10 Deaths Coronavirus chart */}

        {/* Start Top 7 Best Responses chart */}
        <div className="container">
          <div className="row">
            <h3 id = "graph3" className="pl-3 pt-5 mb-3">Best Global Responses to COVID-19</h3>
          </div>
          <div className="boxes">


          <div className="row p-4">
            <div className="col-12 col-md-6 ">
              <div>
                   <canvas className="sizeChart" id="chartTop7Responses"></canvas>
              </div>
            </div>
            <div className="textChart col-12 col-md-6 text-justify pr-4">
              <h6>These are the best countries that <b>best managed COVID-19</b> and they serve as an example to
                        other countries. These countries had a better response in: healthcare management, political
                        response, and financial policy response.</h6>
                      <br />
                      <h6>The case of <b>Taiwan</b> is remarkable, <a href="https://time.com/5851633/best-global-responses-covid-19/">the newspaper Times wrote</a> the following:</h6>
                      <br />
                      <h6><i>“In the initial days of an outbreak, <b>the only thing as bad as being the epicenter of a global pandemic
                        is being right next door to one…</b> especially one that has it out for you (politically speaking). Despite that,
                        the self-governing island has managed a truly admirable response in less-than-ideal circumstances.
                        <br />
                        <br />
                        Rather than shuttering its economy for weeks on end in an attempt to slow the virus,
                        <b>Taiwan</b> went another way—after <b>quickly closing its borders</b> and banning exports of surgical masks,
                        <b>the government used contact tracing and mobile Sim-tracking</b> to identify and ensure those in
                        quarantine were actually abiding by the rules.”
                      </i></h6>
            </div>
          </div>
          </div>
        </div>
        {/* End Top 7 Best Responses chart */}

        {/* Start Top 10 Cases per Million chart */}
        <div className="container">
          <div className="row">
            <h3 id = "graph4" className="pl-3 pt-5 mb-3">Cases per Million People</h3>
          </div>
          <div className="boxes">


          <div className="row p-4">
            <div className="col-12 col-md-6">
              <div>
                   <canvas className="sizeChart" id="chartTotalCasesPerMillion"></canvas>
              </div>
            </div>
            <div className="textChart col-12 col-md-6 text-justify pt-4 pr-4">
              <h6>A meaningful way to compare one country to another, is by putting a base number to make a fair comparison.
                        In this graph, we are comparing one million infected people from country A against country B. </h6>
                      <br />
                      <h6>According to <a href="https://www.bbc.com/news/world-latin-america-52711458">BBC</a> <b>Latin America had seen more
                        than 8.3 million cases and more than 310,000 deaths</b>, as of 14 of September. <b>It’s currently the worst
                        hit area of the world</b>, along with Asia. </h6>
                      <br />
                      <h6>Chile has one of Latin America’s highest rates of testing by doing
                        147 tests out of 1,000 people. While Colombia do 56 tests out of 1,000 people.
                        <br />
                        <br />
                        <b>This is important because the counts of confirmed cases depend on how much a country actually tests.
                        Without testing there is no data.</b> Therefore, the people that might be infected and doesn’t get tested
                        not only spreads the virus but bias the worldwide data.
                      </h6>
            </div>
          </div>
          </div>
        </div>
        {/* End Top 10 Cases per Million chart */}

        {/* Start Sick Population Percentage chart */}
        <div className="container">
        <div className="row">
          <h3 id = "graph5" className="pl-3 pt-5 mb-3">Percentage of population that got COVID-19</h3>
        </div>
        <div className="boxes">


        <div className="row p-4">
          <div className="col-12 col-md-6">
            <div>
                 <canvas className="sizeChart" id="chartSickPopulationPercentage"></canvas>
            </div>
          </div>
          <div className="textChart col-12 col-md-6 text-justify pt-4 pr-4">
            <h6>The cases of COVID-19 vary drastically around the world. According to <a href="https://www.newscientist.com/article/mg24632873-000-how-many-of-us-are-likely-to-have-caught-the-coronavirus-so-far/">New Scientist </a>
                          the London School of and Tropical Medicine estimates <b>that only 35 per cent of symptomatic cases have been reported in
                          the US, and the number is even lower for some other countries.</b>
                        </h6>
                        <br />
                        <h6>What these statistics don’t reflect is the number of <b>symptomless</b> cases,
                          which some evidence suggests <b>can account for between a quarter and half of all coronavirus infections.</b> </h6>
                          <br />
                        <h6>In this graph we want to highlight what percentage of the total population is getting sick.
                          This number may be <b>higher</b> due that not a lot of countries are reporting the total number of cases,
                          this is because many reasons: symptomless cases, lack of COVID-19 tests, people disbelief of the virus,
                          lack of healthcare attention, country reports only hospital deaths, among other reasons. </h6>
                          <br />
                          <h6>However, by highlighting this number, the reader can have an estimation of the percentage of the people that is getting sick. </h6>
          </div>
        </div>
        </div>
        </div>
        {/* End Sick Population Percentage chart */}

        {/* Start Fatality Case Ratio chart */}
         <div className="container">
           <div className="row">
             <h3 id = "graph6" className="pl-3 pt-5 mb-3">Countries with the highest Case Fatality Rate</h3>
           </div>
           <div className="boxes">


           <div className="row p-4">
             <div className="col-12 col-md-6">
               <div>
                    <canvas className="sizeChart" id="chartFatalityCaseRatio"></canvas>
               </div>
             </div>
             <div className="textChart col-12 col-md-6 text-justify pt-4 pr-4">
               <h6>The <b>Case Fatality Rate(CFR)</b> is the number of confirmed deaths divided by
                           the number of confirmed cases. The <b>worldwide CFR</b> is {caseFatalityWorld}%,
                           but Yemen separates from the rest of the other countries by a large margin.
                         </h6>
                         <br />
                         <h6>It has <b>the highest CFR in the world</b> with a {case_fatality_ratio[0]}%. In the next <a href="https://www.undp.org/content/undp/en/home/blog/2020/covid-19-ravages-an-already-desperate-yemen.html">link </a>
                           you can read the testimony of <b>Auke Lootsma</b>, the Representative of Yemen at the United Nations Development Programme.
                         </h6>
        <br />

                         <h6>"After nearly six years of war, 80 percent of Yemen’s 30 million population—more than 24 million people—depend on humanitarian assistance to survive. Millions are severely malnourished and weakened by diseases such as dengue, malaria, and cholera. They suffer from pre-existing conditions and are uniquely vulnerable to the worst and deadliest impact of COVID-19.

        Yemen is already the world’s worst humanitarian and development crisis."</h6>
             </div>
           </div>
           </div>
         </div>
        {/* End Fatality Case Ratio chart */}

      </section>
    </div>
  );
}

export default Information;
