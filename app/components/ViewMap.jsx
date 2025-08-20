'use client'

import React from "react"
import { MapContainer, TileLayer, Polygon } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import { Icon } from "leaflet"


export default function ViewMap({data}){          
    const purpleOptions = { color: 'purple' }

    const cusIcon = new Icon({
        iconUrl: "https://www.svgrepo.com/show/426921/location.svg",
        iconSize: [30, 30]
    })
    return(
        <>
        <div className="flex overflow-hidden">      
            <div className="z-0 fixed top-0 bottom-0 left-0 right-0">
                <MapContainer center={[data[0][0][0], data[0][0][1]]} zoom={19} scrollWheelZoom={true} style={{width: '100%', height: '100%'}}>
                    <TileLayer
                        url='https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
                        maxZoom= {20}
                        attribution= 'Vira map'
                        subdomains={['mt1','mt2','mt3']}
                    />            
                    <Polygon pathOptions={purpleOptions} positions={data} icon={cusIcon} />
                </MapContainer>
            </div>         
        </div>
        </>
    )
}