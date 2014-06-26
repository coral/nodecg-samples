// pass data straight into our function that handles it, preferred for simplicity
nodecg.listenFor('showAlert', showAlert);

// this also works, but hinders readability imo
/*
nodecg.listenFor('showAlert', function(data) {
  // code
  // code
  // code
});
*/

$.ionSound({
  sounds: [           // set needed sounds names
    "alert_in-v2",
    "alert_out-v2"
  ],
  path: "snd/",       // set path to sounds
  multiPlay: true,    // can play multiple sounds at once
  volume: "0.15"      // not so loud please
});

function showAlert (data) {
  if (data.text) {
    // play sound - disabled
    setTimeout(function () {
      $.ionSound.play("alert_in-v2");
    }, 0);


    $('#alerttext').text('' + data.text + '');
    $('#alert').css('width', '18.5em');
    $('#alerttitlecontainer').css('background-color', '#F37424');
    setTimeout(function () {
      $('#exclamation').css('opacity', '100');
    }, 100);
    setTimeout(function () {
      $('#alerttextcontainer').css('height', '3.3em');
    }, 400);

    setTimeout(hideAlert, 7000);
  }
}

function hideAlert () {
  // play sound
  $.ionSound.play("alert_out-v2");

  $('#alerttextcontainer').css('height', '0');
  setTimeout(function () {
    $('#alert').css('width', '0');
  }, 400);
  setTimeout(function () {
    $('#exclamation').css('opacity', '0');
  }, 1000);
  setTimeout(function () {
    $('#alerttitlecontainer').css('background-color', '#ffcc28');
  }, 2000);
}
