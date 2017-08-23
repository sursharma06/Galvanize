function sum(num) {
  return num + 2;
}

sum(10);
var newArray = [1, 2, 3, 4, 5];
function addArray(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

addArray(newArray);

function sayHello(name) {
  return 'Hello ' + name;
}

sayHello('Surbhi');
