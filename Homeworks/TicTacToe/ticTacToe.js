let border = [];
for (let i = 0; i < 3; i++) {
  border.push([]);
  for (let j = 0; j < 3; j++) {
    border[i].push("_");
  }
}

function random() {
  const randomCord = () => Math.round(Math.random() * 2);
  for (;;) {
    if (border.indexOf("_")) {
      const cord1 = randomCord();
      const cord2 = randomCord();
      if (border[cord1][cord2] === "_") {
        border[cord1][cord2] = "X";
        console.log(border);
        break;
      }
    } else return "haxtox chka";
  }
  for (;;) {
    const cord1 = randomCord();
    const cord2 = randomCord();
    if (border[cord1][cord2] === "_") {
      border[cord1][cord2] = "O";
      console.log(border);
      break;
    }
  }
  cords(border);
}

function cords() {
  // X-ի հաղթող տարբերակներ
  if (border[0][0] === "X" && border[0][1] === "X" && border[0][2] === "X") {
    return "Player X win";
  } else if (
    border[1][0] === "X" &&
    border[1][1] === "X" &&
    border[1][2] === "X"
  ) {
    return "Player X win";
  } else if (
    border[2][0] === "X" &&
    border[2][1] === "X" &&
    border[2][2] === "X"
  ) {
    return "Player X win";
  } else if (
    border[0][0] === "X" &&
    border[1][0] === "X" &&
    border[2][0] === "X"
  ) {
    return "Player X win";
  } else if (
    border[0][1] === "X" &&
    border[1][1] === "X" &&
    border[2][1] === "X"
  ) {
    return "Player X win";
  } else if (
    border[0][2] === "X" &&
    border[1][2] === "X" &&
    border[2][2] === "X"
  ) {
    return "Player X win";
  } else if (
    border[0][0] === "X" &&
    border[1][1] === "X" &&
    border[2][2] === "X"
  ) {
    return "Player X win";
  } else if (
    border[0][2] === "X" &&
    border[1][1] === "X" &&
    border[2][0] === "X"
  ) {
    return "Player X win";
  }
  //O-ի հաղթող տարբերակներ
  else if (
    border[0][0] === "O" &&
    border[0][1] === "O" &&
    border[0][2] === "O"
  ) {
    return "Player O win";
  } else if (
    border[1][0] === "O" &&
    border[1][1] === "O" &&
    border[1][2] === "O"
  ) {
    return "Player O win";
  } else if (
    border[2][0] === "O" &&
    border[2][1] === "O" &&
    border[2][2] === "O"
  ) {
    return "Player O win";
  } else if (
    border[0][0] === "O" &&
    border[1][0] === "O" &&
    border[2][0] === "O"
  ) {
    return "Player O win";
  } else if (
    border[0][1] === "O" &&
    border[1][1] === "O" &&
    border[2][1] === "O"
  ) {
    return "Player O win";
  } else if (
    border[0][2] === "O" &&
    border[1][2] === "O" &&
    border[2][2] === "O"
  ) {
    return "Player O win";
  } else if (
    border[0][0] === "O" &&
    border[1][1] === "O" &&
    border[2][2] === "O"
  ) {
    return "Player O win";
  } else if (
    border[0][2] === "O" &&
    border[1][1] === "O" &&
    border[2][0] === "O"
  ) {
    return "Player O win";
  }

  random(border);
}

console.log(random(border));
