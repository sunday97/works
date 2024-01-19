import React from "react";

const AddressSearch = () => {
  const handleSearchClick = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        const roadAddr = data.roadAddress;
        const extraRoadAddr = data.buildingName
          ? " (" + data.buildingName + ")"
          : "";

        document.getElementById("sample4_postcode").value = data.zonecode;
        document.getElementById("sample4_roadAddress").value = roadAddr;
        document.getElementById("sample4_jibunAddress").value =
          data.jibunAddress;

        if (roadAddr !== "") {
          document.getElementById("sample4_extraAddress").value = extraRoadAddr;
        } else {
          document.getElementById("sample4_extraAddress").value = "";
        }

        const guideTextBox = document.getElementById("guide");
        if (data.autoRoadAddress) {
          const expRoadAddr = data.autoRoadAddress + extraRoadAddr;
          guideTextBox.innerHTML = "(예상 도로명 주소: " + expRoadAddr + ")";
          guideTextBox.style.display = "block";
        } else if (data.autoJibunAddress) {
          const expJibunAddr = data.autoJibunAddress;
          guideTextBox.innerHTML = "(예상 지번 주소: " + expJibunAddr + ")";
          guideTextBox.style.display = "block";
        } else {
          guideTextBox.innerHTML = "";
          guideTextBox.style.display = "none";
        }
      },
    }).open();
  };

  return (
    <div>
      <input type="text" id="sample4_postcode" placeholder="우편번호" />
      <input type="button" onClick={handleSearchClick} value="우편번호 찾기" />
      <br />
      <input type="text" id="sample4_roadAddress" placeholder="도로명주소" />
      <input type="text" id="sample4_jibunAddress" placeholder="지번주소" />
      <span id="guide" style={{ color: "#999", display: "none" }}></span>
      <br />
      <input type="text" id="sample4_detailAddress" placeholder="상세주소" />
      <input type="text" id="sample4_extraAddress" placeholder="참고항목" />
    </div>
  );
};

export default AddressSearch;
