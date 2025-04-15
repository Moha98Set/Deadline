'use client'

import React from "react"
import { MapContainer, TileLayer, Polygon } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { Icon } from "leaflet"


export default function ViewMap({data}){    
    console.log("What is this shit",data)
    const purpleOptions = { color: 'purple' }
    const greenOptions = { color: 'green' }
    const blueOptions = { color: 'blue' }

    const cusIcon = new Icon({
        iconUrl: "https://www.svgrepo.com/show/426921/location.svg",
        iconSize: [30, 30]
    })
    return(
        <>
        <div className="border-2">
        <MapContainer center={[data[0][0][0], data[0][0][1]]} zoom={19} scrollWheelZoom={false} style={{width: '100%', height: '83vh'}}>
            <TileLayer
                url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
                maxZoom= {20}
                attribution= 'Vira map'
                subdomains={['mt1','mt2','mt3']}
            />            
            <Polygon pathOptions={purpleOptions} positions={data} icon={cusIcon} />
        </MapContainer>            
        </div>
        </>
    )
}