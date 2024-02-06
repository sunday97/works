import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../Button";
import styles from "./BuddyFindSet.module.css";
import { useEffect, useState } from "react";
import { collection, addDoc, db, updateDatas, getAddress, updateData, addData } from "../../api/firebase"
import ParkSelector from "./PackSelector";

let temp = {};

function BuddyFindSet({ member, setMember, setBtn, setMemAddresses, memAddresses, items, setItems, coordinates, setCoordinates, coordinatesTwo, setCoordinatesTwo, sport, setSport, period, setPeriod, setAaa, aaa, intro, setIntro, address, setAddress, addMarkerWithInfo, map, setPltemp, btn, pltemp,setResultArray,resultArray }) {
  // const [address, setAddress] = useState("");
  // const [nick, setNick] = useState("")
  // const [intro, setIntro] = useState("")
  // const [member, setMember] = useState(null); 
  // const [sport, setSport] = useState("");
  // const [period, setPeriod] = useState("");

  // const [coordinates, setCoordinates] = useState({ lat: null, lng: null });


  // const [resultArray, setResultArray] = useState([]);

  const storedMember = JSON.parse(localStorage.getItem("Member"));
  useEffect(() => {
    if (storedMember) {
      setMember(...storedMember);
    }
  }, []);

  console.log(storedMember[0].MEM)


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const resultArrayData = await getAddress("Buddy Find Setting");
  //       console.log(resultArrayData);
  //       setResultArray(resultArrayData);
  //     } catch (error) {
  //       console.error("주소를 가져오는 도중 오류 발생:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  console.log(resultArray);
  console.log(storedMember[0].MEM);
  const bunsu = resultArray.filter((result) => result?.BFS_docid == storedMember[0].MEM)
  console.log(bunsu[0]?.BFS_docid)
  





  const onSubmit = async (e) => {
    // console.log(storedMember.MEM_NICKNAME)
    // console.log(member)

    if (bunsu[0]?.BFS_docid == storedMember[0].MEM) {
      const member2 = await updateData("Buddy Find Setting", bunsu[0]?.docId, {
        BFS_SPORTS: sport,
        BFS_TIME: period,
        BFS_TITLE: intro,
        BFS_PLACE: address,
        BFS_docid: member?.MEM,
        BFS_NICKNAME: member?.MEM_NICKNAME,
      })
      alert("마커가 수정되었습니다.")
      // console.log(member2.docId)
      // setBtn("000");
    } else {
      const member2 = await addData("Buddy Find Setting", {
        BFS_SPORTS: sport,
        BFS_TIME: period,
        BFS_TITLE: intro,
        BFS_PLACE: address,
        BFS_docid: member?.MEM,
        BFS_NICKNAME: member?.MEM_NICKNAME,

      })
      alert("마커가 추가되었습니다.")


    }



    setBtn("000");

  };



  return (
    <>
      <div className={styles.container} >
        <div>닉네임<br /><input className={styles.input}
        // id="nickInput"
        // placeholder="닉네임을 입력해주세요"
        // value={nick}
        // onChange={(e) => setNick(e.target.value)}
        /><br /></div>
        <div>종목<br /> <input
          className={styles.input}
          id="eventInput"
          placeholder="종목을 입력해주세요"
          value={sport}
          onChange={(e) => {
            const inputValue = e.target.value;
            setSport(e.target.value);
          }}
        />
          <br /></div>
        <div>시간<br /><input className={styles.input}
          id="periodInput"
          placeholder="시간을 입력해주세요"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        /><br /></div>
        <div className={styles.input}>장소<br />
          <ParkSelector setAddress={setAddress} />
          <input
            className={styles.input}
            id="addressInput"
            placeholder="지역을 입력해주세요"
            value={address}
            onChange={(e) => setAddress(e.target.value)} />
          <br /></div>
        <div>한줄소개<br /><input className={styles.input}
          id="introInput"
          placeholder="한줄소개를 입력해주세요"
          value={intro}
          onChange={(e) => setIntro(e.target.value)}
        /><br /></div>
        <Button className={styles.btn} onClick={onSubmit}>버디</Button>
      </div>
    </>
  );
}

export default BuddyFindSet;
