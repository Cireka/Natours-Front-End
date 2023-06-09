import style from "./TourMap.module.css";
import { Tooltip } from "react-leaflet";
import { Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";

export default function TourMap(props) {
  const locations = props.locations?.map((item) => {
    return {
      coordinates: item.coordinates,
      day: item.day,
      description: item.description,
    };
  });

  const markers = [
    ...(locations?.map((item) => ({
      position: [item.coordinates[1], item.coordinates[0]],
      text: item.description,
      day: item.day,
    })) ?? []),
  ];

  const customIcon = L.icon({
    iconUrl: "/pin.png", // Path to your custom icon image
    iconSize: [36, 42], // Size of the icon
    iconAnchor: [16, 32], // Anchor point of the icon (relative to its top-left corner)
  });

  return (
    <div className={style.MapSection}>
      {props.locations && (
        <MapContainer
          center={[
            props.locations[0].coordinates[1],
            props.locations[0].coordinates[0],
          ]}
          zoom={5}
          minZoom={5}
          style={{
            height: "600px",
            marginBottom: "90px",
          }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://api.maptiler.com/maps/ch-swisstopo-lbm-grey/{z}/{x}/{y}.png?key=q3TC08gAa50Q1hSu6NMr"
          />
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.position} icon={customIcon}>
              <Tooltip
                className={style.CustomTooltip}
                direction="right"
                offset={[0, 0]}
                opacity={1}
                permanent
              >
                day{marker.day}:{marker.text}
              </Tooltip>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
}
