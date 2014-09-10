$(nodecg).ready(function() {
  // pass data straight into our function that handles it, preferred for simplicity
  nodecg.listenFor('lowerthirdIn', showLowerThird);
  nodecg.listenFor('lowerthirdOut', function(data) {
    hideLowerThird();
  });
  nodecg.listenFor('lowerthirdPulse', function(data) {
    showLowerThird(data);
    setTimeout(hideLowerThird, (1000 * data.duration));
  });

  $.ionSound({
    sounds: [           // set needed sounds names
      "lowerthird_in",
      "lowerthird_out"
    ],
    path: "snd/",       // set path to sounds
    multiPlay: true,    // can play multiple sounds at once
    volume: "0.15"      // not so loud please
  });

  function showLowerThird(data) {
    if (data.body && data.title) {
      $.ionSound.play("lowerthird_in");

      $('#lowerthirdtitle').text(data.title.toUpperCase()); // just use CSS ya dingus
      $('#lowerthirdtext').text(data.body);

      var tl = new TimelineLite({paused: true});

      //add our tweens to the timeline
      tl.to($('#lowerthirdtitlecontainer'), 0.5, {backgroundColor:"#F37424"}, "0");
      tl.to($('#lowerthirdtitlecontainer'), 0.6, {left:"0%", ease:Quad.easeOut}, "0");
      tl.to($('#shape'), 0.5, {left:"-145px", ease:Quad.easeOut}, "0");
      tl.to($('#lowerthirdtextcontainer'), 0.6, {left:"0%", ease:Quad.easeOut}, "0.025");

      tl.play();
    }
  }4

  function hideLowerThird() {
    // play sound
    $.ionSound.play("lowerthird_out");

    var tl = new TimelineLite({paused: true});

    //add our tweens to the timeline
    tl.to($('#lowerthirdtitlecontainer'), 0.3, {left:"-100%", ease:Quad.easeIn}, "0");
    tl.to($('#lowerthirdtextcontainer'), 0.3, {left:"-100%", ease:Quad.easeIn}, "0.025");
    tl.to($('#shape'), 0.7, {left:"-190px", ease:Quad.easeIn}, "0.2");

    tl.play();
  }
});
