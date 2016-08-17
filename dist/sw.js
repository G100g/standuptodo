console.log("SW")

self.addEventListener('message', function(event) {
  //do something with the message event.data
  console.log(event);
})

self.addEventListener('activate', function(event){
    console.log('activated!');
});
