import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Projects() {
  return (
    <div className="container-fluid p-4">
      <div className="row justify-content-center darkBg rounded">
        <div className="col-12 ">
          <h1 className="fw-bold text-center">Projecten</h1>
          <div className="scrolling-frame d-flex flex-wrap overflow-auto justify-content-center m-3">

            <div className="projectDiv m-1">
              <img src="./images/pasimo.png" alt="Project" loading="lazy" className="img-fluid rounded-2 mb-2"/>

            <h3 className="main-color mt-2">Pasimo</h3>
              <p className="m-0">
                Dit project maakt gebruik van Java, Hibernate en Struts2 om een ​​applicatie te creëren die verschillende functionaliteiten voor zowel studenten als docenten faciliteert. Via dit systeem hebben studenten de mogelijkheid om hun identiteitskaarten te scannen, waardoor automatische inklokken mogelijk wordt. Aan de andere kant beschikken leraren over hulpmiddelen om hun leerlingen effectief te beheren, waarbij ze naadloos toezicht houden op de aanwezigheid en andere gerelateerde taken.
              </p>

            </div>
            
            <div className="projectDiv m-1">
              <img src="./images/slideHub.png" alt="Project" loading="lazy" className="img-fluid rounded-2 mb-2"/>

            <h3 className="main-color mt-2">SlideHub</h3>
              <p className="m-0">
              Met deze applicatie, gebouwd met behulp van Java samen met de Hibernate- en Struts2-frameworks, kunt u diavoorstellingen maken en beheren die continu op meerdere tv's worden herhaald via Raspberry Pi-apparaten. Het biedt een gebruiksvriendelijke interface voor het ontwerpen van dia's, compleet met tekst, afbeeldingen en andere multimedia-elementen. Zodra de dia's zijn gemaakt, kunnen ze in een bepaalde volgorde worden georganiseerd en op de aangesloten tv's worden geplaatst, waardoor een naadloze en gesynchroniseerde weergave op alle schermen wordt gegarandeerd.
              </p>

            </div>
            <div className="projectDiv m-1">
              <img src="./images/qr-goats.png" alt="Project" loading="lazy" className="img-fluid rounded-2 mb-2"/>

            <h3 className="main-color mt-2">QR-Goats</h3>
              <p className="m-0">
              De app is gebouwd met behulp van Java, Hibernate en Struts2. Hiermee kunnen studenten eenvoudig in- en uitklokken door een QR-code te scannen. Ook kunnen ze via de app melden dat ze ziek zijn of te laat komen. Het is allemaal ontworpen om het bijhouden van aanwezigheid eenvoudig en probleemloos te maken voor studenten van Scalda's Software Developer-programma.
              </p>

            </div>

   

          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
