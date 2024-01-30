import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  InfoWindowF,
  MarkerF,
  useJsApiLoader,
} from "@react-google-maps/api";
import dumbbellIcon from "../../assets/dumbbell-solid.svg";
import footballIcon from "../../assets/futbol-regular.svg";
import tableTennisIcon from "../../assets/table-tennis-paddle-ball-solid.svg";
import volleyballIcon from "../../assets/volleyball-solid.svg";
import basketballIcon from "../../assets/basketball-solid.svg";
import WorkingIcon from "../../assets/person-walking-solid.svg";
import swimmingIcon from "../../assets/person-swimming-solid.svg";
import bowlingIcon from "../../assets/bowling-ball-solid.svg";
import hikingIcon from "../../assets/person-hiking-solid.svg";
import bikingIcon from "../../assets/bicycle-solid.svg";

import styles from "./MainMaps.module.css";

const containerStyle = {
  width: "100%",
  height: "100%",
};

// DW아카데미 : 36.328699, 127.422998
// const center = {
//   lat: 36.328699,
//   lng: 127.422998,
// };

// 지도 아이콘 설정
const myStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
];

const arr1 = [
  {
    name: "헬스",
    location: { lat: 36.328546, lng: 127.422258 },
    url: dumbbellIcon,
  },
  {
    name: "a2",
    location: { lat: 36.328402, lng: 127.42314 },
    url: footballIcon,
  },
  {
    name: "탁구",
    location: { lat: 36.328931, lng: 127.422356 },
    url: tableTennisIcon,
  },
  {
    name: "배구",
    location: { lat: 36.328419, lng: 127.421318 },
    url: volleyballIcon,
  },
  {
    name: "농구",
    location: { lat: 36.328932, lng: 127.424947 },
    url: basketballIcon,
  },
];

const arr2 = [
  {
    name: "걷기",
    location: { lat: 36.328546, lng: 127.422258 },
    url: WorkingIcon,
  },
  {
    name: "수영",
    location: { lat: 36.328402, lng: 127.42314 },
    url: swimmingIcon,
  },
  {
    name: "볼링",
    location: { lat: 36.328931, lng: 127.422356 },
    url: bowlingIcon,
  },
  {
    name: "등산",
    location: { lat: 36.328419, lng: 127.421318 },
    url: hikingIcon,
  },
  {
    name: "자전거 타기",
    location: { lat: 36.328932, lng: 127.424947 },
    url: bikingIcon,
  },
];

function MainMaps() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBMgk8uqSEJuNqTYH1mH8ZqQm77xOREeP8",
    version: "weekly",
    language: "ko",
  });

  const [map, setMap] = React.useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [center, setCenter] = useState({
    lat: 36.328699,
    lng: 127.422998,
  });
  const [renderingArray, setRenderingArray] = useState(arr1);
  console.log(renderingArray);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    // 언어 설정을 onLoad에서 수행
    // map.setOptions({ language: "ko", region: "KR", styles: myStyles });
    // 콘솔에 맵 인스턴스 출력
    // console.log("Map instance:", map);

    // fitBounds 메소드가 있는지 확인
    // if (map.fitBounds) {
    //   const bounds = new window.google.maps.LatLngBounds(center);
    //   map.fitBounds(bounds);
    // } else {
    //   console.error("fitBounds method is not available on the map object.");
    // }

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  useEffect(() => {
    // Toggle rendering array after some time (e.g., 5 seconds)
    console.log(renderingArray);
    const timer = setTimeout(() => {
      setRenderingArray(renderingArray === arr1 ? arr2 : arr1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [renderingArray]);

  // console.log("GoogleMap component rendered");
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={18}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        disableDefaultUI: true,
      }}
    >
      {console.log(renderingArray)}
      {/* Child components, such as markers, info windows, etc. */}
      {renderingArray.map((el) => (
        <React.Fragment key={el.name}>
          <MarkerF
            className={styles.Marker}
            onLoad={onLoad}
            position={el.location}
            icon={{
              url: el.url,
              scaledSize: new window.google.maps.Size(32, 32),
            }}
            onClick={(e) => {
              setCenter(el.location);
              console.log(selectedMarker);
              setSelectedMarker(el);
            }}
          />

          {selectedMarker && (
            <InfoWindowF
              position={selectedMarker && selectedMarker.location}
              options={{ pixelOffset: new window.google.maps.Size(0, -25) }}
              onCloseClick={() => {
                setSelectedMarker(null);
              }}
            >
              {selectedMarker && (
                <div className={styles.info}>
                  <h1 className={styles.infoTitle}>
                    {" "}
                    종목 : {selectedMarker.name}{" "}
                  </h1>
                  <p>모두 운동해요!</p>
                </div>
              )}
            </InfoWindowF>
          )}
          {/* {console.log(selectedMarker)} */}
        </React.Fragment>
      ))}
    </GoogleMap>
  ) : (
    <></>
  );
}

// export default React.memo(MainMaps);
export default React.memo(MainMaps);
