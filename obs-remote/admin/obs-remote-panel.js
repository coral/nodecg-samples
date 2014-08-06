nodecg.obs.onConnectionOpened = function() {
  $('#obs-remote_connection-status').text('Connected!');
};

nodecg.obs.onConnectionFailed = function() {
  $('#obs-remote_connection-status').text('Failed!');
};

nodecg.obs.onConnectionClosed = function() {
  $('#obs-remote_connection-status').text('Disconnected!');
};

$('#obs-remote_connect').click(function() {
  var address = $('#obs-remote_address').val();

  nodecg.obs.connect(address);
});
