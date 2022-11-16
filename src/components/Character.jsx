import React from "react";

function Character({character}) {
  
  let {image,name,status,species,gender,location,origin} = character

  return (
    <div className="card bg-danger mb-3">
      <div className=" row g-0">
        <div className="col-md-5 ">
          <img src={image} alt={name} className='img-thumbnail vh-auto rounded-start p-0'/>
        </div>
        <div className="col-md-7">
          <div className='card-body'>
            <h2 className="card-title">{name}</h2>

            <p className="card-text">
              {status} - {species} {gender}
            </p>

            <label>Location:</label>
            <p className="card-text">{location.name}</p>

            <label>Origin:</label>
            <p className="card-text">{origin.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Character;
