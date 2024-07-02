import { useState } from 'react'
import { NavLink } from 'react-router-dom';
function Home() {
  return (
    <>
      <div className="row my-auto">
        <div className="col-md-5">
            <h1 className='fw-bold'>HALLO IK BEN EEN SOFTWARE <span className='mainColor'>DEVELOPER</span></h1>
            <br />
            <p> Mijn naam is Roï Eielts, ben 18 jaar oud en ik ben geboren in Goes op 7 september 2004. Persoonlijk ben ik ben zelf erg geduldig, vrolijk, optimistisch, zelfstandig en ik ben altijd een persoon die doorzet als iets tegenzit. Daarnaast heb ik een bijbaantje als AGF bij de jumbo foodcorner in Goes. Natuurlijk heb ik hobby`s met als mijn favoriete hobby auto`s spotten, maar ik vind het ook leuk om paarden te verzorgen en met de auto rijden. Verder doe ik ook nog een opleiding genaamd Software Development waarbij ik in leerjaar 2 zit. Ik heb deze opleiding gekozen om mijn kennis op computers te kunnen verbeteren en om te leren hoe je een applicatie te ontwikkelen.</p>
            <button className='btn px-4 fw-bold text-white'><NavLink className="nav-link" to="/portfolio-keuzedeel/contact">Contacteer mij</NavLink></button>
        </div>
        <div className="col-md-7 d-flex justify-content-end">
          <img className='w-75' src="./images/mainPicture.png" alt="Dit ben ik"/>
        </div>
      </div>
    </>
  )
}

export default Home
