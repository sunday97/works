// 관리자 회원관리
import styled from "styled-components";
import styles from "./Member.module.css";
// import Button from "../Button";
import Button from './../Button';

const MemberBtn = styled(Button)`
  width: 221px;
  height: 40px;
  background-color: ${(props) =>
    props.location == "회원관리" ? "#1E326D" : "#ffffff"};
  color: ${(props) => (props.location == "회원관리" ? "white" : "black")};
`;

const ReportBtn = styled(Button)`
  width: 221px;
  height: 40px;
  background-color: ${(props) =>
    props.location == "신고관리" ? "#1E326D" : "#ffffff"};
  color: ${(props) => (props.location == "신고관리" ? "white" : "black")};
`;

const DeleteBtn = styled(Button)`
  font-size: 16px;
  color: red;
  font-weight: bold;
`;

const EditBtn = styled(Button)`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 50px;
`;


function ManagerMember({
  memberSearch,
  handleBtnClick,
  btnClick,
  member,
  memberAll,
}) {

  return (
    <>
      {/* 바디 */}
      <div className={styles.managerContainer}>
        <div className={styles.managerWrap}>
          {/* 왼쪽 */}
          <div className={styles.managerLeft}>
            <div className={styles.managerBtnWrap}>
              <MemberBtn
                round
                location={btnClick}
                onClick={() => handleBtnClick("회원관리")}
              >
                회원관리
              </MemberBtn>

              <ReportBtn
                round
                location={btnClick}
                onClick={() => handleBtnClick("신고관리")}
              >
                신고관리
              </ReportBtn>
            </div>
            {/* 검색 회원관리는 있지만 신고관리는 없어져야함 */}
            <input className={styles.managerInput} type="text" />
            {/* 회원 리스트 회원관리는 있지만 신고관리는 다른거로 대체 */}
            {memberAll.map((member) => (
              <div
                className={styles.managerMemberWrap}
                key={member?.docId}
                onClick={() => memberSearch(member?.docId)}
              >
                {/* 사진 */}
                <div className={styles.managerCircle}></div>
                {/* 유저 이름 */}
                <div className={styles.managerMember}>{member?.MEM_NAME}</div>
              </div>
            ))}
          </div>

          {/* 왼쪽 끝 */}
          {/* 오른쪽 전체 */}
          <div className={styles.managerRight}>
            {/* 오른쪽 회원정보 */}
            <div className={styles.managerInfoAll}>
              <div className={styles.managerRightHeader}>
                <p>회원 정보</p>
                <DeleteBtn size="small" round >
                  회원삭제
                </DeleteBtn>
              </div>
              {member && (
                // 오른쪽에서 info묶는용도
                <div className={styles.managerInfoContainer}>
                  {/* 오른쪽에서 왼쪽 영역 -------------------------------------- */}
                  <div>
                    {/* 유저 이름 */}
                    <div className={styles.managerInfoName}>
                      <p>이름</p>
                      <div>{member?.MEM_NAME}</div>
                    </div>

                    {/* 유저 닉네임 */}
                    <div className={styles.managerInfoName}>
                      <p>닉네임</p>
                      <div>{member?.MEM_NICKNAME}</div>
                    </div>

                    {/* 유저 성별 */}
                    <div className={styles.managerInfoName}>
                      <p>성별</p>
                      <div>{member?.MEM_GENDER}</div>
                    </div>

                    {/* 유저 이메일 */}
                    <div className={styles.managerInfoName}>
                      <p>이메일</p>
                      <div>{member?.MEM}</div>
                    </div>

                    {/* 유저 비밀번호 */}
                    <div className={styles.managerInfoName}>
                      <p>비밀번호</p>
                      <div>{member?.MEM_PASSWORD}</div>
                    </div>

                    {/* 유저 전화번호 */}
                    <div className={styles.managerInfoName}>
                      <p>전화번호</p>
                      <div>{member?.MEM_PHONE}</div>
                    </div>

                    {/* 유저 주소 */}
                    <div className={styles.managerInfoName}>
                      <p>주소</p>
                      <div>{member?.MEM_ADDRESS?.jibunAddress}</div>
                    </div>
                  </div>
                  {/* 오른쪽에서 오른쪽 영역 --------------------------------------- */}
                  <div>
                    {/* 유저 가입일 */}
                    <div className={styles.managerInfoName}>
                      <p>가입일</p>
                      <div>{member?.MEM_JOINDATE}</div>
                    </div>

                    {/* 유저 댓글 작성수 */}
                    <div className={styles.managerInfoName}>
                      <p>댓글 작성수</p>
                      <div>{member?.MEM_COMMENT_NUM}</div>
                    </div>

                    {/* 유저 상품후기 */}
                    <div className={styles.managerInfoName}>
                      <p>상품후기</p>
                      <div>{member?.MEM_STORE_REVIEW}</div>
                    </div>

                    {/* 유저 구매량 */}
                    <div className={styles.managerInfoName}>
                      <p>구매량</p>
                      <div>{member?.MEM_STORE_PURCHASE}</div>
                    </div>

                    {/* 유저 문의 횟수 */}
                    <div className={styles.managerInfoName}>
                      <p>문의</p>
                      <div>{member?.MEM_INQUIRY}</div>
                    </div>

                    {/* 유저 포인트 */}
                    <div className={styles.managerInfoName}>
                      <p>포인트</p>
                      <div>{member?.MEM_POINT}P</div>
                    </div>

                    {/* 유저 경고 횟수 */}
                    <div className={styles.managerInfoName}>
                      <p>경고횟수</p>
                      <div>{member?.MEM_WARNING}</div>
                    </div>

                    {/* 유저 로그인 횟수 */}
                    <div className={styles.managerInfoName}>
                      <p>버디이용건수</p>
                      <div>{member?.MEM_LOGIN_COUNT}</div>
                    </div>
                  </div>
                </div>
              )}
              <EditBtn size="small" round>
                수정
              </EditBtn>
              <div className={styles.line}></div>
              {/* 문의? 채팅 창 */}
              <div className={styles.managerChat}></div>
              <input type="text" className={styles.managerWrite} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManagerMember;