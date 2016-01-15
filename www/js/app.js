// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {    
    // Enable to debug issues.
    // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});

    var notificationOpenedCallback = function(jsonData) {
      alert("Test");
      console.log('didReceiveRemoteNotificationCallBack: ' + JSON.stringify(jsonData));
    };

    // Update with your OneSignal AppId and googleProjectNumber before running.
    window.plugins.OneSignal.init("cb77fb24-aacc-4fd7-b475-20b02394a4be",
                                   {googleProjectNumber: "645160166667"},
                                   notificationOpenedCallback);
								   window.plugins.OneSignal.setSubscription(true);
  window.plugins.OneSignal.enableInAppAlertNotification(true);
  window.plugins.OneSignal.sendTag("myspecial", "app");
								   
  });
})