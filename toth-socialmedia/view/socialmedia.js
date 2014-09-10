$(nodecg).ready(function() {
  // pass data straight into our function that handles it, preferred for simplicity
  nodecg.listenFor('socialmediaIn', showLinks);
  nodecg.listenFor('socialmediaOut', hideLinks);
  nodecg.listenFor('socialmediaPulse', function(data) {
    showLinks();
    setTimeout(hideLinks, (1000 * data.duration));
  });

  // Really not sure why I have to do this, but the first cycle doesn't animate correctly otherwise
  resetHat(); 

  $.ionSound({
    sounds: [           // set needed sounds names
      "socialmedia_in-v2",
      "socialmedia_out-v2"
    ],
    path: "snd/",       // set path to sounds
    multiPlay: true,    // can play multiple sounds at once
    volume: "0.15"      // not so loud please
  });

  function showLinks () {
    // play sound
    $.ionSound.play("socialmedia_in-v2");

    $('#hattycontainer').css('opacity', '100');
    $('#hatty').css('transform-origin', '100% 0%');

    var tm = new TimelineMax({paused: true});

    //add our tweens to the timeline
    tm.to($('#links'), 0.5, {width:"31.25%"}, "0");
    tm.to($('#linktext'), 0.5, {top:"0px", ease:Quad.easeOut}, "0.475");
    tm.to($('#hatty'), 0.5, {webkitTransform:"translate3d(0, 0px, 0px) rotateX(0deg)", ease:Quad.easeOut}, "0.5");
    tm.to($('#hatty'), 0.2, {opacity:"1", ease:Quad.easeOut}, "0.5");
    tm.addCallback(startHatLoop, 1);

    tm.play();

    function startHatLoop() {
      $('#hatty').css('transform-origin', '50% 50%');
      $('#hatty').addClass('animated pulseSmaller');
    }
  }

  function hideLinks () {
    //play sound
    $.ionSound.play("socialmedia_out-v2");

    var tm = new TimelineMax({paused: true});

    tm.to($('#linktext'), 0.5, {top:"-238px", ease:Quad.easeOut}, "0");
    tm.to($('#links'), 0.5, {width:"0%"}, "0.450");
    tm.to($('#hattycontainer'), 0.370, {right:"555px"}, "0.450");

    tm.addCallback(startHatOutAnim, 0.5);
    tm.addCallback(resetHat, 1.5);

    tm.play();

    function startHatOutAnim () {
      $('#hatty').removeClass('animated pulseSmaller');
      $('#hatty').css('animation-iteration-count', '1');
      $('#hatty').css('animation-duration', '1s');
      $('#hatty').addClass('animated bounceOut');
    }
  }

  function resetHat () {
    $('#hattycontainer').css('opacity', '0');
    $('#hatty').css('opacity', '0');
    $('#hatty').removeClass('animated bounceOut');
    $('#hatty').css('-webkit-transform', 'translate3d( 0, 100px, -100px ) rotateX( -90deg )');
    $('#hatty').css('animation-duration', '5s');
    $('#hatty').css('animation-iteration-count', 'infinite');
    $('#hattycontainer').css('right', '405px');
  }
});