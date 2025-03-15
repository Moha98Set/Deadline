'use client'

import React from "react"
import { MapContainer, TileLayer, Polygon, Marker } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { Icon } from "leaflet"

export default function ViewMap({data}){    
    
    const purpleOptions = { color: 'purple' }
    const greenOptions = { color: 'green' }
    const blueOptions = { color: 'blue' }

    const cusIcon = new Icon({
        iconUrl: "https://www.svgrepo.com/show/426921/location.svg",
        iconSize: [30, 30]
    })
    return(
        <>
        <div className="mx-auto w-fit items-center">            
        <MapContainer center={[data[0][0], data[0][1]]} zoom={14} scrollWheelZoom={false} style={{width: '1750px', height: '850px'}}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[ data[0][0], data[0][1] ]} icon={cusIcon}>
            </Marker>
            <Polygon pathOptions={purpleOptions} positions={data} icon={cusIcon} />            
        </MapContainer>            
        </div>
        </>
    )
}