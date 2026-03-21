import React from 'react';
import './OurClients.css';

// Import your images
import who from './who1.png';
import kandos from './kandos.jpeg';
import nestle from './Nestle-Logo.jpg';
import softlogic from './softlogic.jpeg';
import jat from './jatlogo.png';
import glomark from './glomark.jpg';
import mas from './mas.jpg';
import dilmah from './dilmah.jpeg';
import ohira from './ohira.png';
import netcracker from './netcracker.jpeg';
import fb from './F&B.png';
import odel from './odel.png';
import pn from './pn.png';
import thuru from './thuru.png';
import rsl from './rsl.png';
import police from './police.png';
import sierra from './sierra.png';
import tasty from './tasty.jpeg';
import solidaridad from './solidaridad.webp';
import lassanaflora from './lassanaflora.png';
import sl from './sl.png';

const OurClients = () => {
  const clients = [
    { id: 1, name: "World Health Organization", image: who },
    { id: 2, name: "Kandos", image: kandos },
    { id: 3, name: "Nestle", image: nestle },
    { id: 4, name: "Softlogic", image: softlogic },
    { id: 5, name: "JAT Holdings", image: jat },
    { id: 6, name: "GLOMARK", image: glomark },
    { id: 7, name: "Sierra", image: sierra },
    { id: 8, name: "OHIRA Co.", image: ohira },
    { id: 9, name: "Dilmah", image: dilmah },
    { id: 10, name: "MAS", image: mas },
    { id: 11, name: "ODEL", image: odel },
    { id: 12, name: "Thuru", image: thuru },
    { id: 13, name: "RSL Delux", image: rsl },
    { id: 14, name: "LassanaFlora", image: lassanaflora },
    { id: 15, name: "Netcracker", image: netcracker },
    { id: 16, name: "F&W", image: fb },
    { id: 17, name: "Solidaridad", image: solidaridad },
    { id: 18, name: "Tasty Lanka", image: tasty },
    { id: 19, name: "Sri Lanka Police", image: police },
    { id: 20, name: "Sri Lanka Army", image: sl }
  ];

  // Split clients into two rows
  const half = Math.ceil(clients.length / 2);
  const rowOne = clients.slice(0, half);
  const rowTwo = clients.slice(half);

  return (
    <section className="clients-section">
      
      {/* --- Header (Centered Container) --- */}
      <div className="calcey-container">
        <div className="clients-header">
          <span className="calcey-label">Our Ecosystem</span>
          <h2 className="calcey-title">
            Trusted by <span className="text-highlight">Industry Leaders</span>
          </h2>
        </div>
      </div>

      {/* --- Marquee (Full Width / No Container) --- */}
      <div className="marquee-container">
        
        {/* Row 1: Moves Left */}
        <div className="marquee-wrapper">
          <div className="marquee-track scroll-left">
            {/* 4 sets to ensure no gaps on wide screens */}
            {[...rowOne, ...rowOne, ...rowOne, ...rowOne].map((client, index) => (
              <div key={`r1-${client.id}-${index}`} className="logo-item">
                <img 
                  src={client.image} 
                  alt={client.name} 
                  className="client-image" 
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moves Right */}
        <div className="marquee-wrapper">
          <div className="marquee-track scroll-right">
            {[...rowTwo, ...rowTwo, ...rowTwo, ...rowTwo].map((client, index) => (
              <div key={`r2-${client.id}-${index}`} className="logo-item">
                <img 
                  src={client.image} 
                  alt={client.name} 
                  className="client-image" 
                />
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};

export default OurClients;