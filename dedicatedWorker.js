onmessage = function(e) {
  console.log('Worker: Message received from main script');
  postMessage('Worker posting message to main script');
}