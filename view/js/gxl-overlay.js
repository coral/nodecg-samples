$(document).on('ncgReady', function() {
    nodecg.listenFor('newGroup', updateGroup);

    var title = $('#title');
    var staff = $('#staff');

    var creditsTimeline = new TimelineLite();
    var staffTimeline = new TimelineLite();

    function updateGroup(group) {
        var groupTitle = group.title;
        var groupStaff = group.staff;

        creditsTimeline.call(updateElements, [groupTitle, groupStaff])
            .to($('#mainContainer'), 1, {
                opacity: 1
            })
            .call(scrollStaff)
            .to($('#mainContainer'), 1, {
                opacity: 0
            }, "+=4")
            .call(resetScroll);
    }

    function updateElements(title, staff) {
        $('#title').text(title);

        $('#staff').empty();

        staff.forEach(function (member) {
            var li = document.createElement('li');
            li.innerHTML = member;

            // jQueryify it
            li = $(li);

            // Append it
            $('#staff').append(li);
        });
    }

    function scrollStaff() {
        var containerHeight = $('#centeringContainer').height();
        var staffHeight = $('#title').height() + $('#staff').height();

        if (staffHeight > containerHeight) {
            staffTimeline.to($('#staff'), 3, {
                top: (containerHeight - staffHeight - 10) + "px",
                ease: Power2.easeInOut
            })
        }
    }

    function resetScroll() {
        $('#staff').css('top', '0');
    }
});