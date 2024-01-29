import React from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import dumbbellIcon from "../../assets/dumbbell-solid.svg";

const containerStyle = {
  width: "100%",
  height: "100%",
};

// DW아카데미 : 36.328699, 127.422998
const center = {
  lat: 36.328699,
  lng: 127.422998,
};

// 지도 아이콘 설정
const myStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
];

function MainMaps() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBMgk8uqSEJuNqTYH1mH8ZqQm77xOREeP8",
    version: "weekly",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    // const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    // 언어 설정을 onLoad에서 수행
    // map.setOptions({ language: "ko", region: "KR", styles: myStyles });
    // 콘솔에 맵 인스턴스 출력
    console.log("Map instance:", map);

    // fitBounds 메소드가 있는지 확인
    if (map.fitBounds) {
      const bounds = new window.google.maps.LatLngBounds(center);
      map.fitBounds(bounds);
    } else {
      console.error("fitBounds method is not available on the map object.");
    }

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={18}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        disableDefaultUI: true,
        language: "ko",
        region: "Ko",
        // styles: myStyles,
      }}
    >
      {/* Child components, such as markers, info windows, etc. */}
      <MarkerF
        onLoad={onLoad}
        position={{ lat: 36.328402, lng: 127.42314 }}
        icon={{
          src: { dumbbellIcon },
          scaledSize: new window.google.maps.Size(32, 32),
        }}
      />
    </GoogleMap>
  ) : (
    <></>
  );
}

// export default React.memo(MainMaps);
export default React.memo(MainMaps);
