// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// function SignUp() {
//   const [email, setEmail] = useState("");
//   const [okemail, setOkEmail] = useState("");
//   const navigate = useNavigate();

//   const onChange = (e) => {
//     setEmail(e.target.value)
//   }
//   const onClick = () => {
//     alert("인증완료 되었습니다.!!")
//     navigate("/Login", { state: { email } })
//   }

//   const check = () => {
//     const check = "wwg0328@naver.com"

//     if (email === check) {
//       setOkEmail(email)
//     } else {
//       alert("인증 안됨")
//     }
//   }

//   return (
//     <>
//       <h1> 인증하기</h1>
//       <form>
//         <label htmlFor="email">이메일</label>
//         <input
//           type="email"
//           id="email"
//           placeholder="ex) styled@DW.kr"
//           onChange={onChange}
//         />
//         <button onClick={check}>인증확인</button>

//       </form>

//       <div>
//         <h1>회원가입하기</h1>
//         <form>
//           <label>이메일</label>
//           <input name="name" id="name" placeholder="이름 작성" value={okemail ? okemail : ""} onChange={onChange}></input>
//         </form>
//         <button onClick={onClick}>가입 완료</button>
//       </div>

//     </>
//   );
// }

// export default SignUp;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "./Container";
import AddressSearch from "./AddressSearch";
// import styles from "./SignUp.module.css"

function SignUp() {
  const [email, setEmail] = useState("");
  const [okemail, setOkEmail] = useState();
  // const [kakao, setKakao] = useState("");
  const navigate = useNavigate();

  const onClick = () => {
    alert("인증완료 되었습니다.!!");
    navigate("/Login", { state: { email } });
  };

  useEffect(() => {
    window.Kakao.init("459871846e276f68850ff857a482ec69");
  }, []);

  const kakaoLogin = (e) => {
    e.preventDefault();

    window.Kakao.Auth.login({
      scope: "profile_nickname, profile_image, account_email",
      success: function (authObj) {
        console.log(authObj);
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: (res) => {
            const kakao_account = res.kakao_account;
            console.log(kakao_account);
            console.log(kakao_account.email);

            if (kakao_account.email) {
              setOkEmail(kakao_account.email);
              setEmail(kakao_account.email);
              if (okemail == email) {
                alert("이미 인증되었습니다.");
              }
            } else {
              alert("인증 안됨");
            }
          },
        });
      },
    });
  };

  return (
    <>
      <Container>
        <h1>인증하기</h1>
        <div onClick={kakaoLogin}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQOJtNpYFKTS1T5QdhIDFFgLzQO93BuFjFw&usqp=CAU"
            alt="login"
          />
        </div>
        <div onClick={kakaoLogin}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFQOJtNpYFKTS1T5QdhIDFFgLzQO93BuFjFw&usqp=CAU"
            alt="login"
          />
        </div>
        <div></div>

        {okemail ? (
          <div>
            <form>
              <div>
                <input type="checkbox" id="agreement" />
                <label for="agreement">전체동의하기</label>
                <div>
                  <textarea>약관동의 1</textarea>
                  <textarea>약관동의 2</textarea>
                </div>
              </div>

              <div>
                <label for="email">이메일</label>
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="이메일 작성"
                    value={okemail ? okemail : ""}
                    class="width"
                  />
                </div>
              </div>

              <div>
                <label for="password">비밀번호</label>
                <div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="비밀번호 작성"
                    class="width"
                  />
                </div>
              </div>

              <div>
                <label for="confirmPassword">비밀번호 확인</label>
                <div>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="비밀번호 확인"
                    class="width"
                  />
                </div>
              </div>

              <div>
                <label>성별</label>
                <div>
                  <label>
                    <input type="radio" name="gender" value="male" />
                    남성
                  </label>
                  <label>
                    <input type="radio" name="gender" value="female" />
                    여성
                  </label>
                </div>
              </div>

              <div>
                <label for="name">이름</label>
                <div>
                  <input type="text" id="name" name="name" required />
                </div>
              </div>

              <div>
                <label for="nickname">닉네임</label>
                <div>
                  <input type="text" id="nickname" name="nickname" required />
                </div>
              </div>

              <div>
                <label for="phone">전화번호</label>
                <div>
                  <input type="tel" id="phone" name="phone" required />
                </div>
              </div>

              <div>
                <AddressSearch />
                {/* <label for="address">주소</label>
                <div>
                  <textarea
                    id="address"
                    name="address"
                    rows="4"
                    cols="50"
                  ></textarea>
                </div> */}
              </div>
            </form>
            <button onClick={onClick}>가입 완료</button>
          </div>
        ) : (
          ""
        )}
      </Container>
    </>
  );
}

export default SignUp;
