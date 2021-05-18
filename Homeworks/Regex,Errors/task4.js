let studentLabs = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];

function gradeLabs(labs) {
  try {
    for (let i = 0; i < labs.length; i++) {
      let lab = labs[i];
      if (!lab.runLab) {
        throw new Error("Error thrown");
      } else if (typeof lab.runLab !== "function") {
        throw new TypeError("lab.runLab is not a function.");
      } else {
        let result = lab.runLab(3);
        console.log(`${lab.student} code worked: ${result === 27}`);
      }
      let result = lab.runLab(3);
      console.log(`${lab.student} code worked: ${result === 27}`);
    }
  } catch (error) {
    console.log(error);
  }
}

gradeLabs(studentLabs);
