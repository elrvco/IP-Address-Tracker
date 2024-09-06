import React from 'react';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet';
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
  } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

function Map(props){
    return (
        <div id="map" style={{height: "60vh", width: "100vw",position:'absolute',zIndex:'0',top:'10vh'}}>
            <MapContainer center={[props.latitude, props.longitude]} zoom={13} scrollWheelZoom={true} style={{height: "100%", width: "100%"}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[props.latitude, props.longitude]} icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            </MapContainer>
            <p>{props.country}</p>
        </div>
        
    )
}

export default Map;