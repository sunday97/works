import React, { useEffect, useState } from "react";
import { GoogleMap, InfoWindowF, LoadScript, Marker } from "@react-google-maps/api";
import styles from "./MapComponent.module.css";
import { getAddress } from "../api/firebase"
import ConvertAddress from "./utils/ConvertAddress";


const MapComponent = ({ addMarkerWithInfo, coordinates, setCoordinates, markerOpacity, setCoordinatesTwo, coordinatesTwo, memAddresses, setMemAddresses, items, setItems }) => {
  // const [items, setItems] = useState([]);
  // const [memAddresses, setMemAddresses] = useState([]);
  // const [markers, setMarkers] = useState([]);
  const [selectedMarker, setSelectedMarker] = useState(null)
  const [infoWindows, setInfoWindows] = useState([]);
  const [map, setMap] = useState(null);
  // const storedMember = JSON.parse(localStorage.getItem("Member"));
  // console.log(storedMember)




  useEffect(() => {
    // items 상태가 변경될 때마다 MEM_ADDRESS 값을 로그에 출력합니다.
    setMemAddresses(items.map((item) => (item.BFS_PLACE ? item.BFS_PLACE : "")));
    // console.log(memAddresses);
  }, [items]);

  const handleLoad = async () => {
    try {
      const result = await getAddress("Buddy Find Setting");
      const updatedResult = result.map((item, index) => ({
        ...item,
        BFS_PLACE: item.BFS_PLACE || "",
        BFS_TIME: item.BFS_TIME || "",
        BFS_SPORTS: item.BFS_SPORTS || "",
        index,
      }));
      setItems(updatedResult);
      const newCoordinates = updatedResult.map((item) => ({ ...item.coordinates, index: item.index }));
      const processedCoordinates = processDuplicateCoordinates(newCoordinates);

      setCoordinatesTwo(processedCoordinates);
    } catch (error) {
      console.error("주소를 가져오는 도중 오류 발생:", error);
    }
  };
  const processDuplicateCoordinates = (coordinatesArray) => {
    const processedArray = [];

    coordinatesArray.forEach((coordinates, index) => {
      // 중복된 좌표인지 확인
      const isDuplicate = processedArray.some((coord) => areCoordinatesEqual(coord, coordinates));

      // 중복된 좌표라면 조정값을 더해서 새로운 좌표 생성
      if (isDuplicate) {
        const adjustedCoordinates = adjustCoordinates(coordinates);
        processedArray.push(adjustedCoordinates);
      } else {
        processedArray.push(coordinates);
      }
    });

    return processedArray;
  };

  const areCoordinatesEqual = (coord1, coord2) => {
    return coord1.lat === coord2.lat && coord1.lng === coord2.lng;
  };

  const adjustCoordinates = (coordinates) => {
    const adjustedLat = coordinates.lat + (Math.random() - 0.5) * 0.0002; // 조정 값 변경
    const adjustedLng = coordinates.lng + (Math.random() - 0.5) * 0.0002; // 조정 값 변경
    return { lat: adjustedLat, lng: adjustedLng };
  };

  console.log(items);
  console.log(coordinatesTwo);

  useEffect(() => {
    handleLoad();
  }, []);

  useEffect(() => {
    // items 상태가 변경될 때마다 MEM_ADDRESS 값을 로그에 출력합니다.
    // setMemAddresses(items.map((item) => item.MEM_ADDRESS.roadAddress));
    setMemAddresses(items.map((item) => item.BFS_PLACE ? item.BFS_PLACE : ""));
  }, [items]);

  useEffect(() => {
    // coordinatesTwo를 인덱스를 기준으로 정렬하여 업데이트합니다.
    const sortedCoordinates = coordinatesTwo.sort((a, b) => a.index - b.index);
    setCoordinatesTwo(sortedCoordinates);
  }, [coordinatesTwo, setCoordinatesTwo]);

  const handleMarkerClick = (index) => {
    // const currentMockItem = items[index];
    const clickedMarkerCoordinates = coordinatesTwo[index];
    setSelectedMarker(clickedMarkerCoordinates)
  };


  return (
    <>
      <div className={styles.flex}>
        <div className={styles.mapping}>
          <LoadScript googleMapsApiKey="AIzaSyCi36s8SAwoRdUQLvVgdvbGrzx84AcMNn4">
            <GoogleMap
              center={coordinates}
              zoom={16}
              mapContainerStyle={{ width: "949px", height: "600px" }}
            >
              {/* ConvertAddress 컴포넌트의 사용 방법에 대한 가정 */}
              {/* items와 memAddresses를 props로 전달 */}
              <ConvertAddress map={map} addMarkerWithInfo={addMarkerWithInfo} items={items} memAddresses={memAddresses} setCoordinatesTwo={setCoordinatesTwo} setCoordinates={setCoordinates} />
              {coordinatesTwo.map((coordinates, index) => {
                const currentMockItem = items[index];

                // MEM_ADDRESS가 존재할 때만 마커를 생성
                if (currentMockItem && currentMockItem.BFS_PLACE) {
                  return (
                    <Marker
                      key={index}
                      position={coordinates}
                      onClick={() => handleMarkerClick(index)}
                      opacity={markerOpacity}
                    >
                      {selectedMarker && selectedMarker.lat === coordinatesTwo[index].lat && selectedMarker.lng === coordinatesTwo[index].lng && (
                        <InfoWindowF
                          position={selectedMarker}
                          onCloseClick={() => {
                            setSelectedMarker(null);
                          }}
                        >
                          <div>
                            {items
                              .filter((item, i) => coordinatesTwo[i].lat === selectedMarker.lat && coordinatesTwo[i].lng === selectedMarker.lng)
                              .map((item, i) => (
                                <div className={styles.infoWindowBox} key={i}>
                                  <p>{`닉네임 : ${item.BFS_NICKNAME}`}</p>
                                  <p>{`종목: ${item.BFS_SPORTS}`}</p>
                                  <p>{`시간: ${item.BFS_TIME}`}</p>
                                  <p>{`한줄소개: ${item.BFS_TITLE}`}</p>
                                </div>
                              ))}
                          </div>
                        </InfoWindowF>
                      )}
                    </Marker>
                  );
                }

                return null; // MEM_ADDRESS가 없으면 null 반환하여 마커를 생성하지 않음
              })}

            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </>
  );
};

export default MapComponent;