'use client'

import React from "react"
import { MapContainer, TileLayer, Polygon, FeatureGroup, Popup } from "react-leaflet"
import { Icon } from "leaflet"
import myData from '@/public/data.json'
import 'leaflet/dist/leaflet.css'

export default function MapClient() {
    const cusIcon = new Icon({
        iconUrl: "https://www.svgrepo.com/show/426921/location.svg",
        iconSize: [30, 30]
    });

    return (
        <MapContainer center={[29.379495, 53.033128]} zoom={8} scrollWheelZoom={true} style={{ width: '100%', height: '100%' }}>
            <TileLayer
                url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
                maxZoom={20}
                attribution='Vira map'
                subdomains={['mt1', 'mt2', 'mt3']}
            />
            {myData.map((item) => (
                <FeatureGroup key={item.id} pathOptions={{ color: item.color }}>
                    <Polygon positions={item.lat_lng} icon={cusIcon} />
                    <Popup><h1 className="font-face-vz text-md font-bold">{item.title}</h1></Popup>
                </FeatureGroup>
            ))}
        </MapContainer>
    )
}
