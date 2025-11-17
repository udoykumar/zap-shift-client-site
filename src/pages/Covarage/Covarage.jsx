import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
const Covarage = () => {
  const position = [23.685, 90.3563];
  const serviceCenters = useLoaderData();
  const mapRef = useRef(null);

  const handleMapSearch = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    const district = serviceCenters.find((d) =>
      d.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 12);
    }
  };
  return (
    <div>
      <h2 className="text-3xl text-secondary font-bold my-4">
        We are available in 64 districts
      </h2>
      <div>
        <form
          onSubmit={handleMapSearch}
          className="flex items-center border gap-2 bg-white border-gray-500/30 h-12 max-w-md w-full rounded-full overflow-hidden"
        >
          <input
            type="text"
            name="location"
            placeholder="Enter distric"
            className="w-full h-full pl-6 outline-none text-sm bg-transparent placeholder-gray-500"
            required
          />
          <button
            type="submit"
            className="bg-primary active:scale-95 transition w-56 h-10 rounded-full text-sm text-white cursor-pointer mr-1"
          >
            Search
          </button>
        </form>
      </div>
      <div className="w-full h-[800px] my-10">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[800px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br /> Service Ares:{" "}
                {center.covered_area.join(",")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Covarage;
