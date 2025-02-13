'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import Image from 'next/image'
import Link from 'next/link'
import { Link2, MapPlus } from 'lucide-react'

const customIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

interface MiniMapProps {
  latitude: number
  longitude: number
}
export const rota =
  'https://www.google.com/maps/place/Truesoft+Sistemas/@-7.117378,-34.8631261,17z/data=!4m6!3m5!1s0x7ace7e3b52e8a19:0xd2ff8ff6758ddb83!8m2!3d-7.1174501!4d-34.8611299!16s%2Fg%2F11bbwk79p6?entry=ttu&g_ep=EgoyMDI1MDIxMC4wIKXMDSoASAFQAw%3D%3D'
const MiniMap: React.FC<MiniMapProps> = ({ latitude, longitude }) => {
  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={16}
      style={{ height: '200px', width: '100%' }}
      scrollWheelZoom={true}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[latitude, longitude]} icon={customIcon}>
        <Popup className="p-3 w-56">
          <div className="flex items-center justify-center gap-3">
            <div>
              <Image src="/imagens/logowdev.png" height={50} width={50} alt="Wdev" />
            </div>
            <div className="flex items-center gap-2">
              <p>wDEV</p>
              <Link href={rota} target="_blank">
                <MapPlus />
              </Link>
            </div>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  )
}

export default MiniMap
