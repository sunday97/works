const COLORS = {
  purple: "#d19fe9",
  green: "#7cd9c2",
  yellow: "#f7d16f",
};

function getCourseColor(code = "000") {
  //   console.log(code);
  //   console.log(code.charAt(0));
  //   const firstCode = code.charAt(0);
  //   console.log(firstCode == 3);
  //   console.log(firstCode === 3);
  const firstCode = Number(code.charAt(0));
  switch (firstCode) {
    case 3:
    case 9:
      return COLORS.green;
    case 5:
      return COLORS.yellow;
    case 1:
    case 7:
    case 8:
    default:
      return COLORS.purple;
  }
}

export default getCourseColor;
