function add() {

};

function subtract() {

};

function multiply(){

};

function divide() {

};

function add(a, b) {
  return a+b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a*b;
};

function divide(a, b) {
  return a/b;
};

function increment(n) {
  n++;
  return n;
};

function decrement(n) {
  n--;
  return n;
};

function makeInt(n, 10) {
  const parsedNum = parseInt(n, 10);
  if (isNaN(parsedNum)) {
    return 0;
  }
  return parsedNum;

  }


};
function preserveDecimal(n){
  parseFloat(n);
  return n;
};
