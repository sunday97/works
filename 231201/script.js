const inputs = document.querySelectorAll("input");
const button = document.querySelector("button");

// 로딩 시점에 첫번째 input요소 focus  --> 유저친화적!!!
window.addEventListener("load", () => inputs[0].focus());

inputs.forEach((input, index1) => {
  input.addEventListener("keyup", (e) => {
    const currentInput = input;
    // previousElementSibling를 구체적으로 말하자면 배열 순서라긴 보다 HTML 구조 상(DOM)에서의 형제관계를 말한다.
    const prevInput = input.previousElementSibling;
    const nextInput = input.nextElementSibling;

    if (
      nextInput &&
      nextInput.hasAttribute("disabled") &&
      currentInput.value !== ""
    ) {
      nextInput.removeAttribute("disabled");
      nextInput.focus();
    }

    if (currentInput.value.length > 1) {
      currentInput.value = "";
      //   return의 2가지 역활  1) 값반환 2) 이스케이프(코드를 더 이상 진행하지 않겠다)
      return;
    }

    // backspace로 지우는 logic 구현
    if (e.key === "Backspace") {
      inputs.forEach((input, index2) => {
        // 백스페이스키가 입력된 input값 과 같거나 오른쪽에 있으면
        // 값을 지우고 disabled 상태로 전환 + 왼쪽으로 이동
        // index1 <= index2 은 사용자가 중간 숫자를 변경할 경우 그것을 기준으로 오른쪽을 전부 지워버리는 역활이다.
        // 이 스코프에선 index1은 고정값이고 index2 는 forEach의 파라미터로 변동값이다.
        if (index1 <= index2) {
          input.setAttribute("disabled", true); // disabled 속성추가
          input.value = "";
          if (prevInput) {
            prevInput.focus();
          }
        }
        // 제일 왼쪽에 있는 input은 disabled 되면 안됨.
        if (index1 === 0) {
          input[0].removeAttribute("disabled");
          inputs[0].focus();
        }
      });
    }

    if (
      // 맨 오른쪽(마지막)에 있는 녀석을 확인해서 .active 추가/제거
      !inputs[inputs.length - 1].hasAttribute("disable") &&
      inputs[inputs.length - 1].value !== ""
    ) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
});
