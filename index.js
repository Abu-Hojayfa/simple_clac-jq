VanillaTilt.init(document.querySelector(".content"), {
  max: 15,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
});

const resultField = $("#result");

function insertNumber(num) {
  const number = resultField.val();
  resultField.val(number + num);
}

function clearAll(c) {
  resultField.val("");
}

function delTheLast() {
  if (resultField.val() != "") {
    const Value = resultField.val();
    const newValue = Value.toString().slice(0, -1);
    resultField.val(newValue);
  }
}

function calculate() {
  const result = eval(resultField.val());
  resultField.val(result);
}
