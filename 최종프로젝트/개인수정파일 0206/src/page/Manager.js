// 관리자 페이지
import styles from "./Manager.module.css";
// import managerBanner from "../assets/관리자 (배너).svg";
import { useEffect, useState } from "react";
import { deleteDatas, getAddress, getManager } from "../api/firebase";
// import ManagerMember from "../components/Manager-components/ManagerMember";
// import ManagerReport from "../components/Manager-components/ManagerReport";
// import ManagerReport from './../components/Manager-components/ManagerReort';
import ManagerMember from './../components/Mananger-components/ManagerMember';
import ManagerReport from './../components/Mananger-components/ManagerReort';

function Manager() {
  // 회원관리와 신고관리 무었을 눌렀는지 확인용 state
  const [btnClick, setBtnClick] = useState("회원관리");
  // 회원 전체를 담을 state
  const [memberAll, setMemberAll] = useState([]);
  // 어떤 회원을 눌렀는지 확인하기 위한 state
  const [member, setMember] = useState([]);

  // useContext 고민
  const handleLoad = async () => {
    const dataAll = await getAddress("Member");
    console.log(dataAll);
    if (dataAll) {
      setMemberAll(dataAll);
      setMember(dataAll[0]);
    }
  };
  const memberSearch = async (docId) => {
    const user = memberAll.find((mem) => mem?.docId == docId);
    setMember(user);
  };

  const handleBtnClick = (text) => {
    setBtnClick(text);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  // const storage = 
  const UserClear = async () => {

    // const deleteDatas = await deleteDatas("Member",)
    // console.log(deleteDatas);
  }

  useEffect(() => {
    UserClear()
  }, [])

  return (
    <>
      {/* 배너 */}
      <div className={styles.managerBanner}>
        {/* <img src={managerBanner} /> */}
        <div className={styles.managerText}>관리자</div>
      </div>
      {btnClick == "회원관리" ? (
        <ManagerMember
          memberSearch={memberSearch}
          handleBtnClick={handleBtnClick}
          btnClick={btnClick}
          member={member}
          memberAll={memberAll}
        />
      ) : (
        <ManagerReport />
      )}
    </>
  );
}

export default Manager;