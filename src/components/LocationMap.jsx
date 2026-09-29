import { useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMap,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerIconRetina from "leaflet/dist/images/marker-icon-2x.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const defaultPosition = [-1.286389, 36.817223];

const locationIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIconRetina,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function MapClickHandler({ onLocationSelect }) {
  useMapEvents({
    click(event) {
      onLocationSelect({
        latitude: event.latlng.lat,
        longitude: event.latlng.lng,
      });
    },
  });

  return null;
}

function MapCenterUpdater({ location }) {
  const map = useMap();

  useEffect(() => {
    if (location) {
      map.flyTo(
        [location.latitude, location.longitude],
        16,
        {
          duration: 1,
        }
      );
    }
  }, [location, map]);

  return null;
}

function LocationMap({ location, onLocationSelect }) {
  const position = location
    ? [location.latitude, location.longitude]
    : defaultPosition;

  return (
    <div className="location-map-container">
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        className="location-map"
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <MapClickHandler
          onLocationSelect={onLocationSelect}
        />

        <MapCenterUpdater location={location} />

        {location && (
          <Marker
            position={[
              location.latitude,
              location.longitude,
            ]}
            icon={locationIcon}
          />
        )}
      </MapContainer>
    </div>
  );
}

export default LocationMap;