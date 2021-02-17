import React, { useEffect, useState } from 'react'
import GoogleMapReact from 'google-map-react';
import Geocode from "react-geocode";

const CustomerDetails = (props) => {
    let data = props.location ? props.location.state : null

    const [center, setCenter] = useState(null)
    const [zoom, setZoom] = useState(18)

    useEffect(()=>{
        if(data){
            getCustomerAddress(data.country, data.city, data.street)
        }
    },[])

    const getCustomerAddress = (country, city, street) => {
        if(!country && !city && !street) return;
        
        let searchText = `${country} ${city} ${street}`;
        Geocode.fromAddress(searchText).then(
            (response) => {
              const { lat, lng } = response.results[0].geometry.location;
              setCenter({lat: lat, lng: lng})
            },
            (error) => {
              console.error(error);
            }
          );
    }

    return (
        <div className="container details-page">
            <div className="row">
                <h2>Customer Details</h2>                                                    
                {
                    data && 
                    <div className="row col-sm-12">
                        <div className="row col-sm-6">
                        {
                            Object.entries(data).map(([key, val]) => 
                                <div key={key} className="row col-sm-12">
                                    <span className="data-key">{key}:</span>
                                    <span className="data-value">{val}</span>
                                </div>
                            )
                        }
                        </div>
                        <div className="row col-sm-6">
                            <div style={{ height: '500px', width: '500px' }}>
                                {
                                    center &&
                                    <GoogleMapReact
                                        
                                        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
                                        defaultCenter={center}
                                        defaultZoom={zoom}
                                    >
                                        <div lat={center.lat} lng={center.lng}>
                                            <img src='/location.png' width="20" height="30" />
                                        </div>
                                    </GoogleMapReact>
                                }
                            </div>
                        </div>
                    </div>
                }          
            </div>
        </div>
    )
}

export default CustomerDetails