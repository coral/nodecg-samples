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

    $('#gxl-credits_fullTest').click(function() {
        nodecg.sendMessage('newCredits', [smallGroup, largeGroup]);
    });
});