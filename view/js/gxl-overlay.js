if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function (searchString, position) {
            position = position || 0;
            return this.lastIndexOf(searchString, position) === position;
        }
    });
}

$(document).on('ncgReady', function() {
    nodecg.listenFor('startCredits', startCredits);

    nodecg.listenFor('stopCredits', stopCredits);

    var title = $('#title');
    var staff = $('#staff');

    var creditsTimeline = new TimelineLite();
    var staffTimeline = new TimelineLite();

    function stopCredits() {
        creditsTimeline.clear().seek(0);
        staffTimeline.clear().seek(0);

        //Reset everything
        $('#sponsorContainer').find('img').css('opacity', 0);
        $('#mainContainer').css('opacity', 0);
        resetScroll();
    }

    function startCredits(credits) {
        stopCredits();

        credits.forEach(function(group) {
            var title = group.title;
            var staff = group.staff;
            var fadeIn = group.fadeIn;
            var duration = group.duration;
            var fadeOut = group.fadeOut;

            if (title.startsWith('.')) {
                // Logos
                creditsTimeline
                    .to($(title), fadeIn, {
                        opacity: 1
                    })
                    .to($(title), fadeOut, {
                        opacity: 0
                    }, "+="+ duration);
            } else {
                // Peeps
                creditsTimeline.call(updateElements, [title, staff])
                    .to($('#mainContainer'), fadeIn, {
                        opacity: 1
                    })
                    .call(scrollStaff, [fadeIn/2, duration, fadeOut/2])
                    .to($('#mainContainer'), fadeOut, {
                        opacity: 0
                    }, "+="+ duration)
                    .call(resetScroll);
            }
        });
    }

    function updateElements(title, staff) {
        $('#title').text(title);

        $('#staff').empty();

        staff.forEach(function (member) {
            var li = document.createElement('li');
            li.innerHTML = member;

            if (member === "StatusSpec" ||
                member === "Spec Tools") {
                li.innerHTML = '<i>'+ member +'</i>';
            }

            // jQueryify it
            li = $(li);

            // Append it
            $('#staff').append(li);
        });
    }

    function scrollStaff(fadeIn, duration, fadeOut) {
        var containerHeight = $('#centeringContainer').height();
        var staffHeight = $('#title').height() + $('#staff').height();

        if (staffHeight > containerHeight) {
            staffTimeline.to($('#staff'), duration - (fadeIn+fadeOut), {
                top: (containerHeight - staffHeight - 10) + "px",
                ease: Power2.easeInOut
            })
        }
    }

    function resetScroll() {
        $('#staff').css('top', '0');
    }
});