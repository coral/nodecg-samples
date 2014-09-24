$(document).ready(function() {
    var smallGroup = {
        title: 'Live Graphics Design',
        staff: [
            "Ballistique",
            "Alex “Dashner” Pylyshyn"
        ]
    };

    var largeGroup = {
        title: 'Special Thanks',
        staff: [
            "Kyle Turk",
            "Nick “TheFragile” Leon",
            "Anthony “Airon” Oetzmann",
            "Matt “Bluee” McNamara",
            "Alex “Lange” Van Camp",
            "John “Faruton” Bradley",
            "John “Twitch John” Howell",
            "Nicholas Pier",
            "Chris Pipher",
            "Mahoney",
            "eFFl"
        ]
    };

    $('#gxl-credits_smallTest').click(function() {
        nodecg.sendMessage('newGroup', smallGroup);
    });

    $('#gxl-credits_largeTest').click(function() {
        nodecg.sendMessage('newGroup', largeGroup);
    });
});