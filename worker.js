self.addEventListener('message', function(e) {
   fetch('http://example.com/movies.json')
            .then((response) => {
                console.log(response);
            });
}, false);