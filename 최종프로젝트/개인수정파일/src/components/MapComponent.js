import React, { useEffect, useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import styles from "./MapComponent.module.css"


const MapComponent = () => {
  const [address, setAddress] = useState("");
  const [coordinates, setCoordinates] = useState(null);

  const center = coordinates || { lat: 36.3398175, lng: 127.3940486 };


  function convertAddress() {
    const geocoder = new window.google.maps.Geocoder();
    const address = document.getElementById("addressInput").value;


    geocoder.geocode({ address }, function (results, status) {
      if (status === "OK") {
        const latitude = results[0].geometry.location.lat();
        const longitude = results[0].geometry.location.lng();

        setCoordinates({ lat: latitude, lng: longitude });

        // const resultDiv = document.getElementById("result");
        // resultDiv.innerHTML = "위도: " + latitude + "<br>경도: " + longitude;
      } else {
        alert("실패했습니다: " + status);
      }
    });
  }

  return (
    <>
      <div className={styles.flex}>

        <div className={styles.mapping}>

          <LoadScript googleMapsApiKey="AIzaSyCi36s8SAwoRdUQLvVgdvbGrzx84AcMNn4" >
            <GoogleMap
              center={center}
              zoom={16}
              mapContainerStyle={{ width: "949px", height: "600px" }}
            >

              <Marker
                position={center}
                onClick={() => {
                  alert("클릭")
                }}
              />

            </GoogleMap>
          </LoadScript>
        </div>
        {/* <input
          id="addressInput"
          placeholder="지역을 입력해주세요"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={convertAddress}>클릭</button> */}
        {/* <div id="result"></div> */}
      </div>
    </>
  );
};

export default MapComponent;
