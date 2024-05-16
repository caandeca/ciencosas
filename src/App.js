import { useState } from "react";
import { places, departamentos } from "places";
import { InfoWindow, ListPlaces, MapView } from "Components";

const App = () => {
  const [placeActive, setPlaceActive] = useState(null);
  const handleChange = (place) => {
    setPlaceActive(place);
  };
  return (
    <>
      <MapView
        places={places.concat(departamentos)}
        placeActive={placeActive}
        handleChange={handleChange}
      />
      <ListPlaces handleChange={handleChange} places={places.concat(departamentos)} />
      <InfoWindow placeActive={placeActive} />
    </>
  );
};

export default App;
