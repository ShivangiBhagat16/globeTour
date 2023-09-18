import { useSearchParams } from 'react-router-dom';
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet';
import { useState } from 'react';

import styles from './Map.module.css'

function Map({cities}) {
    const [mapPosition, setMapPosition] = useState([40, 0]);
    const [searchParams, setSearchParams] = useSearchParams();

    const mapLat = searchParams.get('lat');
    const mapLon = searchParams.get('lon');

    return (
        <div className={styles.mapContainer}>
            <MapContainer 
                center={mapPosition} 
                zoom={6} 
                scrollWheelZoom={true} 
                className={styles.map}>
                <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
                />
                {cities.map( city => (
                    <Marker  key={city.cityName} position={[city.position.lat, city.position.lon]}>
                    <Popup>
                        {city.emoji} {city.cityName}
                    </Popup>
                    </Marker>
                ))}
                <ChangeCenter position={[mapLat || 40, mapLon || 0]} />
            </MapContainer>
        </div>
    )
}

export default Map

function ChangeCenter({position}) {
    const map = useMap();
    map.setView(position);
    return null;
}
