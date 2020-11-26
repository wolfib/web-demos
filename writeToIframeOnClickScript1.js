document.getElementById('button').onclick = () => {
  const el = document.getElementById('frame');
  console.log('element', el);
  const doc = el.contentDocument;
  console.log(doc);
  doc.open();
  doc.write(`
    <h1>Written with document.write()</h1>
    <img src="mickey.jpg" />
    <link rel="stylesheet" href="styles2.css">
  `);
  doc.close();
}