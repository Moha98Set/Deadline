import { MapContainer, TileLayer, Polygon, FeatureGroup, Popup, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import myData from '@/public/data.json';
import 'leaflet/dist/leaflet.css';

const position = [28.941673, 53.191152];
const cusIcon = new Icon({
  iconUrl: "/map.svg"
});

export default function MapClient() {
  return (
    <MapContainer center={[29.379495, 53.033128]} zoom={8} scrollWheelZoom={true} style={{ width: '100%', height: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://viramap.ir">Viramap</a>'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        maxZoom={20}
      />
      {myData.map((item) => (
        <FeatureGroup key={item.id} pathOptions={{ color: item.color }}>
          <Polygon positions={item.lat_lng} icon={cusIcon} />
          <Popup><h1 className="font-face-vz text-md font-bold">{item.title}</h1></Popup>
        </FeatureGroup>
      ))}
      <Marker position={position}>
        <Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>
      </Marker>
    </MapContainer>
  );
}
