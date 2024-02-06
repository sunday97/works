import styles from "./BuddyFindMap.module.css";
import MapComponent from "../MapComponent";
import Button from "../Button";
import styled from "styled-components";
import { useEffect, useState } from "react";
import classNames from "classnames";
import BuddyFindSet from "./BuddyFindSet";
import { useLocation } from "react-router-dom";
import { getAddress } from "../../api/firebase";

const SelectBtn = styled(Button)`
background-color: #1e326d;
color:#fff;
margin: 0 auto;
`




function BuddyFindMap({ addMarkerWithInfo, addrss, setAddrss, memAddresses, setMemAddresses, items, setItems, coordinates, setCoordinates, coordinatesTwo, setCoordinatesTwo, member, setMember, setResultArray, resultArray }) {
  const [addressTwo, setAddressTwo] = useState("");
  // const [coordinates, setCoordinates] = useState(null)
  // const [coordinatesTwo, setCoordinatesTwo] = useState([])
  const [isToggle, setIsToggle] = useState(false)
  const [showMarker, setShowMarker] = useState(false);
  const [markerOpacity, setMarkerOpacity] = useState(1);

  const location = useLocation();
  // console.log(loaction);
  // const Obj = location.state;
  // console.log(coordinatesTwo);
  const center = coordinates || { lat: 36.3286904, lng: 127.4229992 };

  const Obj = JSON.parse(localStorage.getItem("Member"));




  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultArrayData = await getAddress("Buddy Find Setting");
        console.log(resultArrayData);
        setResultArray(resultArrayData);
      } catch (error) {
        console.error("주소를 가져오는 도중 오류 발생:", error);
      }
    };

    fetchData();
    if (showMarker) {
      // 마커 숨김
      // setCoordinates(null);
      if (resultArray[0]?.BFS_docid == Obj[0].MEM) {
        setMarkerOpacity(0);
      }
    } else {
      // 마커 표시
      displayLocationOnMap(center);
      setMarkerOpacity(1);
    }
    console.log(resultArray)
  }, [showMarker, center]);

  

  function convertAddress() {
    const geocoder = new window.google.maps.Geocoder();
    const inputAddress = document.getElementById("addressInput").value;
    // const address = document.getElementById("addressInput").value;


    geocoder.geocode({ address: inputAddress }, function (results, status) {
      if (status === "OK") {
        const latitude = results[0].geometry.location.lat();
        const longitude = results[0].geometry.location.lng();

        setCoordinates({ lat: latitude, lng: longitude });

        // const resultDiv = document.getElementById("result");
        // resultDiv.innerHTML = "위도: " + latitude + "<br>경도: " + longitude;
        displayLocationOnMap({ lat: latitude, lng: longitude });
      } else {
        alert("실패했습니다: " + status);
      }
    });
  }
  // console.log(coordinates)


  // 버디 찾기 버튼을 눌렀을 때 호출되는 함수
  function displayLocationOnMap(coords) {
    // 좌표를 MapComponent로 전달
    setCoordinates(coords);
  }

  const handleToggle = () => {
    setShowMarker(prevShowMarker => !prevShowMarker);
    setIsToggle(previsToggle => !previsToggle)
  }



  return (
    <>
      <div className={styles.mapNav}>
        <div className={`${styles.buddy}`}>
          <span className={styles.text}>버디 켜기</span>
          <div className={styles.toggle}
            onClick={handleToggle}>
            <div className={`${styles.circle} ${isToggle ? styles.active : ""}`}></div>
          </div>
        </div>
      </div>

      <div className={styles.mapContainer}>
        <div className={styles.boxContainer}>
          <div className={styles.boxbtn}>
            <div className={styles.box}>
              <div>종목</div>
              <input
                className={styles.input}
              // id="eventInput"
              // placeholder="종목을 입력해주세요"
              // value={sport}
              // onChange={(e) => setSport(e.target.value)} 
              />
            </div>
            <div className={styles.box}>
              <div>시간</div>
              <input
                className={styles.input}
              // id="periodInput"
              // placeholder="시간을 입력해주세요"
              // value={period}
              // onChange={(e) => setPeriod(e.target.value)}
              />
            </div>
            <div className={styles.box}>
              <div>장소</div>
              <input
                className={styles.input}
                id="addressInput"
                placeholder="지역을 입력해주세요"
                value={addressTwo}
                onChange={(e) => setAddressTwo(e.target.value)}
              />
            </div>
          </div>
          <SelectBtn onClick={convertAddress}>버디찾기</SelectBtn>
        </div>
        <MapComponent
          items={items} setItems={setItems} member={member} setMember={setMember} address={addrss}
          memAddresses={memAddresses} setMemAddresses={setMemAddresses} coordinates={coordinates}
          coordinatesTwo={coordinatesTwo} setCoordinatesTwo={setCoordinatesTwo} setCoordinates={setCoordinates}
          markerOpacity={markerOpacity} Obj={Obj} />
      </div>
    </>
  );
}

export default BuddyFindMap;