document.getElementById('button2').onclick = () => {
  const el = document.getElementById('frame');
  console.log('element', el);
  const doc = el.contentDocument;
  console.log(doc);
  doc.open();
  doc.write(`
    <h1>Second write with document.write()</h1>
    <img src="vader.jpg" />
    <link rel="stylesheet" href="styles3.css">
  `);
  doc.close();
}