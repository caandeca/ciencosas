import completeImg from "assets/complete.png";
import noCompleteImg from "assets/nocomplete.png";
import mapImg from "assets/map.png";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import { useState } from "react";

const MapView = ({
  markerActive,
  google,
  handleChange,
  placeActive,
  places,
}) => {
  return (
    <Map
      google={google}
      zoom={6}
      initialCenter={{
        lat: placeActive?.latitude ? placeActive?.latitude : 4.6124935,
        lng: placeActive?.longitude ? placeActive?.longitude : -72.6306321,
      }}
      center={{
        lat: placeActive?.latitude ? placeActive?.latitude : 4.6124935,
        lng: placeActive?.longitude ? placeActive?.longitude : -72.6306321,
      }}
    >
      {places.map(
        (place, index) =>
          place.latitude !== "" && (
            <Marker
              id={index}
              title={place.name}
              name={index}
              position={{ lat: place.latitude, lng: place.longitude }}
              onClick={() => {
                handleChange(place);
              }}
              icon={{
                url:
                  place.id === placeActive?.id
                    ? mapImg
                    : place.complete
                    ? completeImg
                    : noCompleteImg,
                anchor: new window.google.maps.Point(24, 24),
                scaledSize: new window.google.maps.Size(32, 32),
              }}
            />
          )
      )}
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyC-UqoqfTZaWKOI_X5zVmsyMtZ1WorU3Rs",
})(MapView);
