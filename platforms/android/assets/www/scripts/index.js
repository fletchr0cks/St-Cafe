// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// To debug code on page load in cordova-simulate or on Android devices/emulators: launch your app, set breakpoints, 
// and then run "window.location.reload()" in the JavaScript Console.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Handle the Cordova pause and resume events
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
        //startAuth();
    };

    function getParameterByName(name) {
        var match = RegExp('[#&]' + name + '=([^&]*)').exec(window.location.hash);
        return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
    }

    function getAccessToken() {
        return getParameterByName('code');
    }

    function getIdToken() {
        return getParameterByName('id_token');
    }

    //$(function () {
    //    var access_token = getAccessToken();
    //    alert(access_token);
    //    // Optional: an ID Token will be returned by Auth0
    //    // if your response_type argument contained id_token
    //    var id_token = getIdToken();

    //    // Use the Access Token to make API calls
    //    // ...
    //});
    document.getElementById("myButton").addEventListener("click", myFunction);

    function myFunction() {
        console.log('asd');
        startAuth()
    }

    function startAuth() {
        $('#info').html("clicked 1 <br/>")
       // alert("hihi")
        $('#info').append("clicked 2 <br/>")
        $.oauth2({
            auth_url: 'https://www.strava.com/oauth/authorize',           // required
            response_type: 'code',      // required  - "code"/"token"
            grant_type: 'authorization_code',
            token_url: 'https://www.strava.com/oauth/token',   // required for response_type ="code"
            scope: 'read',         // recommended if available
            client_id: '8556',          // required
            client_secret: '807abeefa32bbf90ef73f93d1f20dc61398d5be8',      // required for response_type ="code"
            redirect_uri: 'http://localhost:4400',       // required - any dummy url http://www.yourcompany.com
            other_params: {}         // optional params object for scope, state, ...
        }, function (token, response) {
            // do something with token or response
            console.log(token & " " & response);
            $('#info').append("success: " & token & " " & response)
        }, function (error, response) {
            // do something with error object
            console.log(error & " " & response);
            $('#info').append("fail: " & token & " " & response)
        });
    }
//   
//        alert("hihi")
//        $.ajax({
//            type: 'POST',
//            url: "https://www.wrike.com/oauth2/token",
//            data: {
//                client_id: <client_id>,//I took these details out for the post
//        client_secret: <client_secret>,//I took these details out for the post
//        grant_type: "authorization_code",
//        code: get("code")//from redirect URI
//    },
//    crossDomain: true,
//    dataType: 'jsonp',
//    success: function (response) {
//                            alert(response); // server response
//    }
//});
//    }

    function onPause() {
        // TODO: This application has been suspended. Save application state here.
    };

    function onResume() {
        // TODO: This application has been reactivated. Restore application state here.
    };
} )();