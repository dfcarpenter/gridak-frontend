
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const accessToken = "pk.eyJ1IjoiZGZjYXJwZW50ZXIiLCJhIjoiY2o0eW9vYXYyMXVybTJ3cGg5ZWk2OGl6OCJ9.lhKoPBjdQzlJqh34tFITNg"
export const Map = () => {
    return (
        <MapContainer center={[64.2008, 149.49]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`}
        />
        <Marker position={[51.505, -0.09]}>
            <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
        </Marker>
        </MapContainer>
    )
}

