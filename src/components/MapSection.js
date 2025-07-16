'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

export default function MapSection() {
  const [Map, setMap] = useState(null)

  useEffect(() => {
    // Delay loading to ensure it's on client
    const loadMap = async () => {
      const { MapContainer, TileLayer, Marker, Popup } = await import('react-leaflet')
      const L = await import('leaflet')
      await import('leaflet/dist/leaflet.css')

      delete L.Icon.Default.prototype._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl:
          'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      })

      setMap(() => (
        <MapContainer
          center={[6.5244, 3.3792]}
          zoom={13}
          style={{ height: '400px', width: '100%' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={[6.5244, 3.3792]}>
            <Popup>Lagos, Nigeria</Popup>
          </Marker>
        </MapContainer>
      ))
    }

    if (typeof window !== 'undefined') {
      loadMap()
    }
  }, [])

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Our Location</h2>
        <div className="rounded-2xl overflow-hidden shadow-xl">{Map}</div>
      </div>
    </section>
  )
}
