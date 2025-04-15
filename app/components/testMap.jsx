'use client'

import { useEffect, useState } from 'react'

export default function ViewMap({ id }) {

  const [polygonCoords, setPolygonCoords] = useState([])
  const sendToAPI = async (coords) => {
    try {
      const response = await fetch(`http://localhost:3000/api/data/polygon/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ polygonCoords: coords }),
      })
  
      if (!response.ok) throw new Error('Failed to update data')
  
      const result = await response.json()
      console.log('✅ API:', result)
    } catch (error) {
      console.error('❌ Error:', error)
    }
  }
  

  useEffect(() => {
    const initMap = async () => {
      const L = (await import('leaflet')).default
      await import('leaflet/dist/leaflet.css')
      await import('leaflet-draw')
      await import('leaflet-draw/dist/leaflet.draw.css')
      await import('../globals.css') // اگه مسیرت فرق داره، اصلاحش کن

      const map = L.map('mapid').setView([28.737896, 54.502781], 10)
      

      L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
        attribution: 'Vira map',
        subdomains: ['mt1','mt2','mt3'],
        minZoom: 10,
        maxZoom: 20,
      }).addTo(map)

      const drawnItems = new L.FeatureGroup()
      map.addLayer(drawnItems)

      const drawControl = new L.Control.Draw({
        draw: {
          polygon: true,
          polyline: false,
          rectangle: false,
          circle: false,
          marker: false,
          circlemarker: false,
        },
        edit: {
          featureGroup: drawnItems,
        },
      })
      map.addControl(drawControl)

      map.on(L.Draw.Event.CREATED, function (event) {
        const layer = event.layer
        drawnItems.addLayer(layer)

        const latlngs = layer.getLatLngs()
        const points = latlngs[0] || latlngs[0][0]
        const coords = points.map((p) => (
            [
                p.lat,
                p.lng
            ]
        ))
        setPolygonCoords(coords) 
        // ❗ گرفتن تایید کاربر
        const confirmSend = window.confirm("آیا از ارسال مختصات برای آپدیت مطمئن هستید؟")
      
        if (confirmSend) {
          sendToAPI(coords)
        } else {
          console.log("❌ ارسال مختصات لغو شد.")
        }
      })
    }

    initMap()

    return () => {
      const el = document.getElementById('mapid')
      if (el) el.innerHTML = ''
    }
  }, [])

  return (
    <div style={{ padding: '1rem' }}>
      <div
        id="mapid"
        style={{
          height: '70vh',
          width: '100%',
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '1rem',
        }}
      />
      <h3>مختصات پلیگان:</h3>
      <pre style={{ background: '#f1f1f1', padding: '1rem' }}>
        {JSON.stringify(polygonCoords, null, 2)}
      </pre>
    </div>
  )
}
