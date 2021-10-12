import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [services, setServiecs] = useState([]);
  useEffect (() => {
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServiecs(data));
  },[])
  return (
    <div className="service-container">
    {/*   <h1>This is Service </h1>
      {services.length} */}

      {
        services.map(service =><Service
        key={service.id}
        service={service}
        ></Service> )
      }
    </div>
  );
};

export default Services;