'use strict';

var obs = new OBSRemote();

var connectionStatus = $bundle.find('#connectionStatus');
var addressField = $bundle.find('#address');
var connectBtn = $bundle.find('#connect');
var toggleStream = $bundle.find('#toggleStream');
var togglePreview = $bundle.find('#togglePreview');

connectBtn.click(function () {
    var address = addressField.val();

    obs.connect(address);
});

var streaming = false;
var previewing = false;

obs.onConnectionOpened = function () {
    connectionStatus.text('Connected!');
};

obs.onConnectionFailed = function () {
    connectionStatus.text('Failed!');
};

obs.onConnectionClosed = function () {
    connectionStatus.text('Disconnected!');
};

obs.onStreamStarted = function (preview) {
    if (preview) {
        togglePreview.text('Stop Preview');
        toggleStream.prop('disabled', true);
        previewing = true;
    } else {
        toggleStream.text('Stop Stream');
        togglePreview.prop('disabled', true);
        streaming = true;
    }
};

obs.onStreamStopped = function (preview) {
    streaming = previewing = false;

    if (preview) {
        togglePreview.text('Start Preview');
        toggleStream.prop('disabled', false);
    } else {
        toggleStream.text('Start Stream');
        togglePreview.prop('disabled', false);
    }
};

toggleStream.click(function () {
    // Can't toggle stream while previewing OR OBS DIES
    if (previewing) return;

    obs.toggleStream();
});

togglePreview.click(function () {
    // Can't toggle preview while streaming OR OBS DIES
    if (streaming) return;

    obs.toggleStream(true);
});
