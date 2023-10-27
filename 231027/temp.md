    let printPtag;
    let colorArr = [];
    const changeBackGroundColor = function () {
      for (i = 0; i < 3; i++) {
        colorArr.push(parseInt(Math.random() * 256));
      }
    };
    function interval() {
      console.log("printPtag 실행 전");
      printPtag = setInterval(function () {
        colorArr = [];
        changeBackGroundColor();
        console.log(colorArr);
        let pTag = document.createElement("p");
        document.body.append(pTag, "계속해서 생성되는 문구입니다.");
        let findP = document.querySelector("p");
        findP.style.backgroundColor = `rgb(${colorArr.toString()})`;
      }, 1000);
      console.log("printPtag 실행 후");

      //   console.log("clearInterval 실행 전");
      //   clearInterval(printPtag);
      //   console.log("clearInterval 실행 후");
    }
    function stopInterval() {
      clearInterval(printPtag);
    }
