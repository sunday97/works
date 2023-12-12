function random(n) {
  return Math.ceil(Math.random() * n);
}

// (key값이 vlaue값을)이기는 경우를 객체로 담았다.
const WINS = {
  rock: "scissor",
  sciccor: "paper",
  paper: "rock",
};

export function generateRandomHand() {
  const num = random(3);
  if (num === 1) {
    return "rock";
  } else if (num === 2) {
    return "scissor";
  } else {
    return "paper";
  }
}

export function compareHand(a, b) {
  // 내승리(상대패) ==> 1, 내패배(상대승) ==> -1, 무승부 ==> 0

  if (WINS[a] === b) return 1; // 내가 승리할 경우(상대가 패배할 경우)
  if (WINS[b] === a) return -1; // 내가 패배할 경우(상대가 승리할 경우)
  return 0; // 무승부
}

// 컴포넌트가 아니면 굳이 밑에다 export를 쓰지 않고 함수에 직접 쓴다.
