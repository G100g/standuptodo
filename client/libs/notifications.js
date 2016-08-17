// import Notify from 'notifyjs';

const NotEngine = {

  setup() {
  //   if (!Notify.needsPermission) {
  //     this.doNotification();
  //   } else if (Notify.isSupported()) {
  //     Notify.requestPermission(
  //         this.onPermissionGranted.bind(this),
  //         this.onPermissionDenied.bind(this)
  //     );
  //   }
  },
  //
  // onPermissionGranted() {
  //   this.doNotification();
  // },
  //
  // onPermissionDenied() {
  //
  // },
  //
  // doNotification() {
  //   const myNotification = new Notify('Yo dawg!', {
  //     body: 'This is an awesome notification',
  //     notifyShow: this.onNotifyShow.bind(this),
  //   });
  //
  //   myNotification.show();
  // },
  //
  // onNotifyShow(...rest) {
  //   console.log('notification was shown!', rest);
  // },

  sendMessage(message) {
    // This wraps the message posting/response in a promise, which will resolve if the response doesn't
    // contain an error, and reject with the error if it does. If you'd prefer, it's possible to call
    // controller.postMessage() and set up the onmessage handler independently of a promise, but this is
    // a convenient wrapper.
    return new Promise(function (resolve, reject) {
      var messageChannel = new MessageChannel();
      messageChannel.port1.onmessage = function (event) {
        if (event.data.error) {
          reject(event.data.error);
        } else {
          resolve(event.data);
        }
      };

      // This sends the message data as well as transferring messageChannel.port2 to the service worker.
      // The service worker can then use the transferred port to reply via postMessage(), which
      // will in turn trigger the onmessage handler on messageChannel.port1.
      // See https://html.spec.whatwg.org/multipage/workers.html#dom-worker-postmessage
      navigator.serviceWorker.controller.postMessage(message,
        [messageChannel.port2]);
    });
  },


};

console.log("MARIo");

navigator.serviceWorker.register('sw.js')
    .then(function (ref) {
      console.log(ref);

      return navigator.serviceWorker.ready;
    })
    .then(function (ref) {
      console.log(ref);

      NotEngine.sendMessage({
        command: 'add',
        url: 'blabla',
      }).then(function () {
        // If the promise resolves, just display a success message.
        // ChromeSamples.setStatus('Added to cache.');
        console.log('Messages sent');
      }).catch((err) => {
        // console.log('Error send messgabe');
        console.error(err)
      }); // If t


  // navigator.serviceWorker.controller.postMessage({'command': 'say-hello!'})

  // Notification.requestPermission(function(result) {
  //   if (result === 'granted') {
  //     console.log(result);
  //     navigator.serviceWorker.ready.then(function(registration) {
  //       console.log(registration);
  //       registration.showNotification('Notification with ServiceWorker');
  //     }, function (err){
  //       console.log(err);
  //     });
  //   }
  // });
    })
    .catch((err) => {
      console.log('Error registering service worker', err);
    });


export default NotEngine;
