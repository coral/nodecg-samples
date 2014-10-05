$(document).ready(function() {
    var credits = [];

    function updateStaff() {
        $.post('/gxl-credits/update', function(newCredits) {
            credits = newCredits;

            //$('#gxl-credits_staffCollapse').removeClass('in');

            var duration = 0;

            var html = ''; //Duration: ' + duration + ' seconds<br><br>';

            credits.forEach(function (group) {
                var title = group.title;
                var staff = group.staff;
                var fadeIn = group.fadeIn;
                var dur = group.duration;
                var fadeOut = group.fadeOut;

                duration += fadeIn + dur + fadeOut;

                html += '<u>'+ title +'</u><br>';

                staff.forEach(function(member) {
                    html += member +'<br>';
                })
            });

            html = 'Duration: ' + duration + ' seconds<br><br>' + html;

            $('#gxl-credits_staffCollapse').html(html);
        });
    }

    $('#gxl-credits_update').click(updateStaff);

    $('#gxl-credits_show').click(function() {
        nodecg.sendMessage('startCredits', credits);
    });

    $('#gxl-credits_hide').click(function() {
        nodecg.sendMessage('stopCredits');
    });

    $('#gxl-credits_staffCollapse').on('hidden.bs.collapse shown.bs.collapse', function () {
        $('body > div.container').click();
    });

    updateStaff();
});