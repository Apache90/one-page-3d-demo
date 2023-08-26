import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation
} from "react-simple-maps";

const Mapa = () => {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 800,
        center: [-65, -35]  // Centered on Argentina
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies
        geography="../../public/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={1}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-65.2226, -26.8305]}  // Coordinates for Tucumán
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 3,
          strokeLinecap: "round"
        }}
      >
        <text x="-75" textAnchor="start" alignmentBaseline="high" fill="white">
          {"Tucumán"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Mapa;
