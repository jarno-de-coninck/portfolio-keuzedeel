import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutMe() {
  return (
    <div className="container-fluid h-100 my-auto">
      <h1 className="fw-bold text-center mb-4">Over mij</h1>
      <div className="row justify-content-center align-items-center h-75">
        {/* About me Section */}
        <div className="col-12 col-sm-6 col-md-4 d-flex flex-column text-center mb-3 mb-md-0 align-items-center">
          <img 
            className="img-fluid mb-4 aboutMeImage"
            src="./images/myself.png"
            alt="Myself"
            loading="lazy"
          />
          <h3 className="mainColor">Hobbies</h3>
          <p>Leer meer over mijn hobbies.</p>
          <div className="d-flex flex-column gap-2 w-100 px-3">
            <button className="btn btn-primary fw-bold text-white w-100" onClick={() => window.open('./CV.pdf', '_blank')}>My CV</button>
            <button className="btn btn-secondary fw-bold text-white w-100" data-bs-toggle="modal" data-bs-target="#myHobbies">Leer meer</button>
          </div>
        </div>

        {/* Education Section */}
        <div className="col-12 col-sm-6 col-md-4 d-flex flex-column text-center mb-3 mb-md-0 align-items-center">
          <img 
            className="img-fluid mb-4 aboutMeImage"
            src="./images/education.png"
            alt="Education"
            loading="lazy"
          />
          <h3 className="mainColor">Ervaringen</h3>
          <p>Ontdek waarom ik dit carrièrepad heb gekozen en hoe het tot nu toe bevalt.</p>
          <button className="btn btn-secondary fw-bold text-white w-100" data-bs-toggle="modal" data-bs-target="#myCareer">Leer meer</button>
        </div>

        {/* Skills Section */}
        <div className="col-12 col-sm-6 col-md-4 d-flex flex-column text-center align-items-center">
          <img 
            className="img-fluid mb-4 aboutMeImage"
            src="./images/skills.png"
            alt="Skills"
            loading="lazy"
          />
          <h3 className="mainColor">Kennisvaardigheden</h3>
          <p>Ontdek welke vaardigheden ik beheers.</p>
          <button className="btn btn-secondary fw-bold text-white w-100" data-bs-toggle="modal" data-bs-target="#mySkills">Leer meer</button>
        </div>
      </div>

      {/* Modal for Skills */}
      <div className="modal fade" id="mySkills" tabIndex="-1" aria-labelledby="mySkillsLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content projectElement">
            <div className="modal-header projectElement">
              <h4 className="modal-title" id="mySkillsLabel">Skills</h4>
            </div>
            <div className="modal-body projectElement">
            <h5>Back-End</h5>
              In de back-end heb ik vaardigheden opgedaan in Java, SQL, C#, Python en verschillende frameworks zoals Hibernate en struts 2. Deze vaardigheden stellen me in staat om robuuste en efficiënte server-side applicaties te ontwikkelen, gegevensbeheer effectief te verwerken en dynamische weboplossingen te creëren.
              <br/><br/>
              <h5>Front-End</h5>
              Aan de front-end kant ben ik goed thuis in Bootstrap, angular, React, React Native, HTML/CSS, SCSS, TypeScript en JavaScript. Deze expertise stelt me in staat om visueel aantrekkelijke en gebruiksvriendelijke interfaces te maken, waardoor een boeiende ervaring voor websitebezoekers en applicatiegebruikers wordt gegarandeerd.

            </div>
            <div className="modal-footer projectElement">
              <button type="button" className="btn btn-danger border border-dark" data-bs-dismiss="modal">Sluit</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Career */}
      <div className="modal fade" id="myCareer" tabIndex="-1" aria-labelledby="myCareerLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content projectElement">
            <div className="modal-header projectElement">
              <h4 className="modal-title" id="myCareerLabel">Career</h4>
            </div>
            <div className="modal-body projectElement">
            <h5>Waarom ik dit carrière pad heb gekozen:</h5>
            Ik ben altijd gefascineerd geweest door technologie en hoe deze onze wereld beïnvloedt. Al van jongs af aan wilde ik meer weten over computers en hoe ze werken. Wat mij echt trok, was de mogelijkheid om te begrijpen wat er achter de schermen gebeurt bij websites en applicaties die ik dagelijks gebruik. Het idee dat ik iets kon creëren dat mensen over de hele wereld zouden gebruiken en waarderen, sprak me enorm aan.
            <br/><br/>
            Naarmate ik meer leerde over programmeren en webontwikkeling, realiseerde ik me hoe krachtig en creatief dit vakgebied is. Je begint met een leeg canvas en eindigt met een product dat een echte impact kan hebben. Websites en applicaties zijn de bouwstenen van onze moderne samenleving, en ik wilde deel uitmaken van deze wereld. Ik zag het als een kans om problemen op te lossen, innovatieve oplossingen te bedenken en iets tastbaars te creëren waar ik trots op kan zijn.
            <br/><br/>
            Daarnaast biedt deze carrièreweg talloze mogelijkheden voor groei en specialisatie. Van front-end ontwerp en gebruikerservaring tot back-end ontwikkeling en datamanagement, er is altijd iets nieuws te leren en te ontdekken. De tech-industrie is dynamisch en voortdurend in ontwikkeling, wat betekent dat ik nooit zal vastzitten in een routine en altijd nieuwe uitdagingen kan aangaan.
            <br/><br/><br/><br/>
            <h5>Hoe het tot nu toe gaat:<br/></h5>
            Nu ik in mijn vierde en laatste schooljaar ben, kijk ik terug op een leerzame en uitdagende reis. Ik heb veel geleerd over webontwikkeling, van het bouwen van mijn eerste eenvoudige website tot het creëren van meer complexe applicaties. Het was niet altijd gemakkelijk; er waren momenten waarop ik vastzat aan een bug of niet wist hoe ik verder moest. Maar elke keer als ik een probleem oploste of een nieuwe vaardigheid onder de knie kreeg, voelde ik een enorme voldoening.
            <br/><br/>
            De docenten en de projecten die ik heb gedaan, hebben me geholpen om mijn vaardigheden te verbeteren en meer vertrouwen te krijgen in mijn capaciteiten. Ik heb geleerd hoe belangrijk het is om door te zetten en creatief te denken als je voor obstakels staat. Het leukste aan mijn studie is dat ik meteen kan zien wat ik heb gemaakt en hoe het functioneert, wat me motiveert om door te gaan en mezelf te verbeteren.
            <br/><br/>
            Ik kijk ernaar uit om mijn opleiding af te ronden en mijn carrière in de tech-industrie te beginnen. Ik ben benieuwd naar de nieuwe kansen die voor me liggen en ik ben vastbesloten om een positieve impact te maken met mijn werk. Het is een opwindende tijd om in dit vakgebied te zitten, en ik kan niet wachten om te zien waar mijn passie en vaardigheden me naartoe zullen leiden.
            </div>
            <div className="modal-footer projectElement">
              <button type="button" className="btn btn-danger border border-dark" data-bs-dismiss="modal">Sluit</button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Hobbies */}
      <div className="modal fade" id="myHobbies" tabIndex="-1" aria-labelledby="myHobbiesLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content projectElement">
            <div className="modal-header projectElement">
              <h4 className="modal-title" id="myHobbiesLabel">Hobbies</h4>
            </div>
            <div className="modal-body projectElement">
            <h5>Auto's Spotten:<br/></h5>
            Ik heb echt een passie voor auto's spotten. Er is iets magisch aan het ontdekken van zeldzame en unieke modellen op straat. Het is als een schattenjacht, maar dan met voertuigen. Soms pak ik mijn camera en ga ik op pad naar populaire locaties waar ik weet dat er interessante auto's kunnen staan. Het leukste moment is wanneer je een klassieke of een exotische auto ziet die je niet elke dag tegenkomt. De opwinding van het vastleggen van een bijzondere auto met de camera geeft me echt een kick.
            <br/><br/>
            <h5>Auto Rijden:<br/></h5>
            Rijden geeft me een gevoel van vrijheid en controle. Ik geniet ervan om op lange ritten te gaan, vooral door schilderachtige routes. De wind in mijn haren, de weg voor me en de muziek op de achtergrond; het is mijn manier om te ontspannen en te ontsnappen aan de dagelijkse drukte. Elke rit is een avontuur, of ik nu een nieuwe stad verken of gewoon een rustige rit door het platteland maak. Het gevoel van de motor onder me, het schakelen van de versnellingen, en het beheersen van de bochten – het is pure vreugde.
            <br/><br/>
            <h5>Programmeer Kennis Opdoen:<br/></h5>
            Ik ben altijd gefascineerd door technologie en hoe dingen werken. Programmeren voelt als het leren van een nieuwe taal die je de mogelijkheid geeft om je eigen wereld te creëren. Ik besteed uren aan het leren van nieuwe programmeertalen en technieken, en ik geniet van de uitdaging om complexe problemen op te lossen. Het moment wanneer een stukje code eindelijk werkt zoals je het had bedacht, dat geeft echt voldoening. Bovendien is het geweldig om te zien hoe je ideeën tot leven komen in de vorm van een werkende applicatie.
            </div>
            <div className="modal-footer projectElement">
              <button type="button" className="btn btn-danger border border-dark" data-bs-dismiss="modal">Sluit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
