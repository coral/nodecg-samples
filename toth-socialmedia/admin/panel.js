$('#toth-socialmedia_in').click(function() { nodecg.sendMessage('socialmediaIn', ''); });
$('#toth-socialmedia_out').click(function() { nodecg.sendMessage('socialmediaOut', ''); });
$('#toth-socialmedia_pulse10').click(function() { nodecg.sendMessage('socialmediaPulse', pulse(10)); });
$('#toth-socialmedia_pulse30').click(function() { nodecg.sendMessage('socialmediaPulse', pulse(30)); });
$('#toth-socialmedia_pulse60').click(function() { nodecg.sendMessage('socialmediaPulse', pulse(60)); });

function pulse(duration) {
  var msg = {}
  msg.duration = duration;
  return msg;
}