import React, { useEffect } from 'react';
import './App.css';
import './carousel.css'; 
import { initCarousel } from './carousel.js'; 

function App() {
  useEffect(() => {
    initCarousel(); 
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Zapatería "Dos Hermanos"</h1>
        <p>¡Bienvenido a nuestra zapatería!</p>
        <div>
          <h2>Nuestra selección de zapatos:</h2>
          <ul>
            <li>Zapatos para hombre </li>
            <li>Zapatos para mujeres</li>
            <li>Zapatos para niños</li>
          </ul>
        </div>
        <div>
          <h2>Horario de atención:</h2>
          <p>Lunes a viernes: 9:00 AM - 6:00 PM</p>
          <p>Sábados y domingos: Cerrado</p>
        </div>
        <div>
          <p>¡Descuentos disponibles hasta agotar existencias!</p>
        </div>
      </header>
      <div className="carousel-container">
        <div className="carousel-slide">
          {}
          {}
          <img src={process.env.PUBLIC_URL + '/img/img.1.jpg'} alt="Imagen 1" />
          <img src={process.env.PUBLIC_URL + '/img/img.2.jpg'} alt="Imagen 2" />
          <img src={process.env.PUBLIC_URL + '/img/img.3.jpg'} alt="Imagen 3" />
          <img src={process.env.PUBLIC_URL + '/img/img.4.jpg'} alt="Imagen 4" />
          <img src={process.env.PUBLIC_URL + '/img/img.5.jpg'} alt="Imagen 5" />
          <img src={process.env.PUBLIC_URL + '/img/img.6.jpg'} alt="Imagen 6" />
          <img src={process.env.PUBLIC_URL + '/img/img.7.jpg'} alt="Imagen 7" />
          <img src={process.env.PUBLIC_URL + '/img/img.1.jpg'} alt="Imagen 1" />
          <img src={process.env.PUBLIC_URL + '/img/img.2.jpg'} alt="Imagen 2" />
          <img src={process.env.PUBLIC_URL + '/img/img.3.jpg'} alt="Imagen 3" />
          <img src={process.env.PUBLIC_URL + '/img/img.4.jpg'} alt="Imagen 4" />
          <img src={process.env.PUBLIC_URL + '/img/img.5.jpg'} alt="Imagen 5" />
          <img src={process.env.PUBLIC_URL + '/img/img.6.jpg'} alt="Imagen 6" />
          <img src={process.env.PUBLIC_URL + '/img/img.7.jpg'} alt="Imagen 7" />
          <img src={process.env.PUBLIC_URL + '/img/img.1.jpg'} alt="Imagen 1" />
          <img src={process.env.PUBLIC_URL + '/img/img.2.jpg'} alt="Imagen 2" />
          <img src={process.env.PUBLIC_URL + '/img/img.3.jpg'} alt="Imagen 3" />
          <img src={process.env.PUBLIC_URL + '/img/img.4.jpg'} alt="Imagen 4" />
          <img src={process.env.PUBLIC_URL + '/img/img.5.jpg'} alt="Imagen 5" />
          <img src={process.env.PUBLIC_URL + '/img/img.6.jpg'} alt="Imagen 6" />
          <img src={process.env.PUBLIC_URL + '/img/img.7.jpg'} alt="Imagen 7" />
        </div>
      </div>
    </div>
  );
}

export default App;
