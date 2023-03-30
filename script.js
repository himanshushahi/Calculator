let arr = [];
let inputField = document.getElementById("input");
let insert = (num) => {
  arr.push(num);
  if (
    (arr[arr.length - 2] == "+" && arr[arr.length - 1] == "+") ||
    (arr[arr.length - 2] == "-" && arr[arr.length - 1] == "-") ||
    (arr[arr.length - 2] == "*" && arr[arr.length - 1] == "*") ||
    (arr[arr.length - 2] == "/" && arr[arr.length - 1] == "/") ||
    (arr[arr.length - 2] == "." && arr[arr.length - 1] == ".")
  ) {
    arr.pop();
  } else if (
    (arr[arr.length - 2] == "+" && arr[arr.length - 1] == "-") ||
    (arr[arr.length - 2] == "+" && arr[arr.length - 1] == "*") ||
    (arr[arr.length - 2] == "+" && arr[arr.length - 1] == "/") ||
    (arr[arr.length - 2] == "-" && arr[arr.length - 1] == "+") ||
    (arr[arr.length - 2] == "-" && arr[arr.length - 1] == "*") ||
    (arr[arr.length - 2] == "-" && arr[arr.length - 1] == "/") ||
    (arr[arr.length - 2] == "*" && arr[arr.length - 1] == "+") ||
    (arr[arr.length - 2] == "*" && arr[arr.length - 1] == "-") ||
    (arr[arr.length - 2] == "*" && arr[arr.length - 1] == "/") ||
    (arr[arr.length - 2] == "/" && arr[arr.length - 1] == "+") ||
    (arr[arr.length - 2] == "/" && arr[arr.length - 1] == "-") ||
    (arr[arr.length - 2] == "/" && arr[arr.length - 1] == "*")
  ) {
    inputField.value = inputField.value.substring(
      0,
      inputField.value.length - 1
    );
    inputField.value += arr[arr.length - 1];
  } else {
    inputField.value += arr[arr.length - 1];
  }
};

let equal = () => {
  if (arr[0] == "+" || arr[0] == "-" || arr[0] == "*" || arr[0] == "/") {
    arr = [];
    inputField.value = "";
  } else if (
    arr[arr.length - 1] == "-" ||
    arr[arr.length - 1] == "*" ||
    arr[arr.length - 1] == "/" ||
    arr[arr.length - 1] == "+"
  ) {
    arr.pop();
    inputField.value = inputField.value.substring(0, input.value.length - 1);
    try {
      if (arr[0] == ".") {
        arr.unshift("0");
        arr.forEach((elem) => {
          inputField.vlaue += elem;
        });
      }
      let evalValue = eval(inputField.value);
      inputField.value = evalValue == undefined ? "0" : evalValue;
    } catch (error) {
      inputField.value = "";
    }
  } else if (inputField.value.length != 0) {
    try {
      let evalValue = eval(inputField.value);
      inputField.value = evalValue == undefined ? "0" : evalValue;
    } catch (error) {
      inputField.value = "";
    }
  }
};

let backspace = () => {
  inputField.value = inputField.value.substring(0, input.value.length - 1);
  if (inputField.value.length < 1) {
    arr = [];
  }
};

function clearAll() {
  inputField.value = "";
  arr = [];
}
