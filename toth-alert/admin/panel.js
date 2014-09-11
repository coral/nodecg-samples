$(function () {
    $('#toth-alert_send').click(function () {
        var alertText = $('#toth-alert_message').val();

        nodecg.sendMessage('showAlert', {
            text: alertText
        });
    });
});
