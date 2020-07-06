import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup,  } from "react-map-gl";
import * as parkDate from "./allsports.json";



export default function Maps() {
  const [viewport, setViewport] = useState({
    latitude:   43.6532,
    longitude: -79.3832,
    width: 525,
    height: 350,
    zoom: 8
  });
  const [selectedPark, setSelectedPark] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/leeroyp/ckbtojjb712th1jpeyrf3fhtb"
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        {parkDate.features.map(park => (
          <Marker
            key={park.properties.PARK_ID}
            latitude={park.geometry.coordinates[1]}
            longitude={park.geometry.coordinates[0]}
          >
            <button
              className="btn-secondary"
              onClick={e => {
                e.preventDefault();
                setSelectedPark(park);
              }}
            >
              <img src="/assets/icons/tennis.svg" alt="Skate Park Icon" />
            </button>
          </Marker>
        ))}

        {selectedPark ? (
          <Popup
            latitude={selectedPark.geometry.coordinates[1]}
            longitude={selectedPark.geometry.coordinates[0]}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div className="card-body">
              <h2>{selectedPark.properties.NAME}</h2>
              {/* <p>{selectedPark.properties.DESCRIPTION}</p> */}
              <button  className="btn-secondary"
              onClick={e => {
               
              }}> Select

              </button>
              </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
}


