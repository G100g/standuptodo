// import Notify from 'notifyjs';

const NotEngine = {

  init(store) {
    this.store = store;
  //   if (!Notify.needsPermission) {
  //     this.doNotification();
  //   } else if (Notify.isSupported()) {
  //     Notify.requestPermission(
  //         this.onPermissionGranted.bind(this),
  //         this.onPermissionDenied.bind(this)
  //     );
  //   }

    this.registerServiceWorker();

  },

  onRegistration(registration) {
    if (registration.waiting) {
      console.log('waiting', registration.waiting);
      registration.waiting.addEventListener('statechange', this.onStateChange('waiting'));
    }

    if (registration.installing) {
      console.log('installing', registration.installing);
      registration.installing.addEventListener('statechange', this.onStateChange('installing'));
    }

    if (registration.active) {
      console.log('active', registration.active);
      registration.active.addEventListener('statechange', this.onStateChange('active'));
    }

    return registration;
  },

  onStateChange(from) {
    return function (e) {
      console.log('statechange', from, 'to', e.target.state);

      if (e.target.state === 'activated') {

          // NotEngine.sendMessage({
          //   command: 'SET_NOTIFICATION',
          //   options: {
          //     timeout: 10*1000,
          //     title: 'What did you do last hour?',
          //     config: {
          //       body: 'Bla bla bla',
          //       requireInteraction: true,
          //     },
          //   },
          // }).then(function () {
          //   // If the promise resolves, just display a success message.
          //   // ChromeSamples.setStatus('Added to cache.');
          //   console.log('Messages sent');
          // }).catch((err) => {
          //   // console.log('Error send messgabe');
          //   console.error(err);
          // }); // If t
      }
    };
  },

  subscribePushNotification() {
    // Disable the button so it can't be changed while
    // we process the permission request


    navigator.serviceWorker.ready.then((reg) => {
      reg.pushManager.subscribe({ userVisibleOnly: true })
        .then((subscription) => {
          // The subscription was successful
          // isPushEnabled = true;
          // subBtn.textContent = 'Unsubscribe from Push Messaging';
          // subBtn.disabled = false;
          //
          // // Update status to subscribe current user on server, and to let
          // // other users know this user has subscribed
          // var endpoint = subscription.endpoint;
          // var key = subscription.getKey('p256dh');
          // updateStatus(endpoint,key,'subscribe');

          console.log('Subscribed');
          this.store.dispatch({ type: 'NOTIFICATION_AVAILABLE' });
        })
        .catch((e) => {
          if (Notification.permission === 'denied') {
            // The user denied the notification permission which
            // means we failed to subscribe and the user will need
            // to manually change the notification permission to
            // subscribe to push messages
            console.log('Permission for Notifications was denied');
          } else {
            // A problem occurred with the subscription, this can
            // often be down to an issue or lack of the gcm_sender_id
            // and / or gcm_user_visible_only
            console.log('Unable to subscribe to push.', e);
            // subBtn.disabled = false;
            // subBtn.textContent = 'Subscribe to Push Messaging';

          }
          this.store.dispatch({ type: 'NOTIFICATION_NOT_AVAILABLE' });
        });
    });
  },

  registerServiceWorker() {
    navigator.serviceWorker.register('sw.js', { scope: './' })
        .then(navigator.serviceWorker.ready)
        .then(this.onRegistration.bind(this))
        .then((serviceWorkerRegistration) => {
          console.log(serviceWorkerRegistration);

          // Check for PUsh notification api

          // serviceWorkerRegistration.pushManager.permissionState().then(
          //   function (pushPermissionStatus) {
          //
          // // If we don't have permission then set the UI accordingly
          //     if (pushPermissionStatus !== 'granted') {
          //       //changeState(STATE_NOTIFICATION_PERMISSION);
          //       console.log("we don't have permission fro PUSH");
          //       return;
          //     }
          //
          //   console.log("we HAVE permission fro PUSH");
          //
          //
          //
          //   })

          this.subscribePushNotification();

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
  },

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





export default NotEngine;
