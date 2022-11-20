import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import SingleVolunteer from "../../SingleVolunteer/SingleVolunteer";

const VolunteerContent = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/events')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

  return (
    <div>
      <div className="search-box w-50 mx-auto my-3 p-5">
        <h3 className="fw-bold text-uppercase my-4">I grow by helping people by need</h3>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search..."
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          /> 
          <button className="btn btn-primary">Search</button> 
        </InputGroup>
      </div>
      <div id='event' className="container"> 
            <div className="row">
                {services.map(service => <SingleVolunteer
                key={service._id}
                service={service}
                >

                </SingleVolunteer>)}
            </div>
      </div>
    </div>
  );
};

export default VolunteerContent;
