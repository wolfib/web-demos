const promise1 = new Promise((resolve, reject) => {
  resolve('Success!');
});

document.querySelector('#start') 
    .addEventListener('click', function(event) { 
    console.log('clicked');
    fn10();
    });

// fn10();

function fn10() {
  fn11();
}
function fn11() {
  fn12();
}
function fn12() {
  fn13withALongerName();
}
function fn13withALongerName() {
  fn14();
}
function fn14() {
  fn15();
}
function fn15() {
  promise1.then((value) => {
    fn1();
  });
}
