import React from "react"
import Header from "./header"
import Footer from "./footer"
import {MapContainer as Map,TileLayer,Popup,Marker} from "react-leaflet"
const Maps=()=>{
    const position = [51.505, -0.09]
    return(
        <>
        
        <div style={{border:"1px solid red"}}>
            xyz
            <Map center={position} zoom={13} scrollWheelZoom={false}>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </Map>

        </div>
        </>
    )
}
export default Maps;