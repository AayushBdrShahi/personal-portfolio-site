import './Service.css';
import Services_Data from '../../assets/service_data';

const Service = () => {
  return (
    <div id="services" className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        {/* Image for My Services */}
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => (
          <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_desc}</p>
            <div className="services-readmore">
              <p>Read More</p>
              {/* Arrow icon */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
