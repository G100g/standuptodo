const Notify = {

  _notifyTimeOut: 60 * 1000,

  activate(options) {

    console.log(options);


    this.ST = setTimeout(function () {
      self.registration.showNotification(options.title, options.config);
    }, options.timeout);

    return this
  },

  clear() {
    clearTimeout(this.ST);
    return this;
  },

};

self.addEventListener('message', function (event) {
  // do something with the message event.data
  console.log(event);

  switch (event.data.command) {

    case 'SET_NOTIFICATION':
      Notify.clear().activate(event.data.options);
      break;

    case 'CLEAR_NOTIFICATION':
      Notify.clear();
      break;
  }

  // console.log(Notification);

  // event.showNotification('Nice').then((e) => {
  //   console.log(e);
  // }).catch(function (err) {console.log(err)});
});

self.addEventListener('install', function(event) {
    event.waitUntil(self.skipWaiting()); // Activate worker immediately
});

self.addEventListener('activate', function(event) {
    console.log('activated!');
    event.waitUntil(self.clients.claim()); // Become available to all pages
});
