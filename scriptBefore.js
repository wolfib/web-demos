document.onclick = () => console.log('clicked on document');
document.getElementById('button').onclick = () => {
  document.open();
  document.write('<h1>Written with document.write()</h1><img src="mickey.jpg" /><link rel="stylesheet" href="styles2.css"><script src="scriptAfter.js"></script>');
  console.log('after writing');
  document.close();
  console.log('after closing');
}