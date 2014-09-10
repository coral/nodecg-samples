$(nodecg).ready(function() {
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
    if (!data.text) {
      return;
    }

    $.ionSound.play('alert_in-v2');

    var tl = new TimelineLite({paused: true});

    $('#alerttext').html(data.text);

    //add our tweens to the timeline
    tl.to($('#alert'), 0.3, {width:"18.5em"});
    tl.to($('#alerttitlecontainer'), 0.4, {backgroundColor:"#F37424"}, "0");
    tl.to($('#exclamation'), 0.4, {opacity:"1"}, "0.1");
    tl.to($('#alerttextcontainer'), 0.5, {height:"3.3em"}, "0.4");

    tl.play();


    setTimeout(hideAlert, 7000);
  }

  function hideAlert () {
    // play sound
    $.ionSound.play('alert_out-v2');

    var tl = new TimelineLite({paused: true});

    //add our tweens to the timeline
    tl.to($('#alerttextcontainer'), 0.5, {height:"0"});
    tl.to($('#alert'), 0.3, {width:"0"}, "0.4");
    tl.to($('#exclamation'), 0, {opacity:"0"}, "1");
    tl.to($('#alerttitlecontainer'), 0, {backgroundColor:"#ffcc28"}, "1");

    tl.play();
  }
});
