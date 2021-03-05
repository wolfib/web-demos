function fn1() {
  fn2();
}
function fn2() {
  fn3();
}
function fn3() {
  fn4();
}
function fn4() {
  fn5();
}
function fn5() {
  fn6();
}
function fn6() {
  fn7();
}

function fn7() {
  const iframe1 = document.createElement("iframe");
  iframe1.setAttribute("src", "background-color.html");
  document.body.appendChild(iframe1);
  iframe.doesNotExist();
}
