$(document).ready(function() {
    // executes when HTML-Document is loaded and DOM is ready
    console.log("document is ready");

    // callback for button 1
    $("#button1").click(function(event){
        $.getJSON('/api_test1', function(jd) {
            $('#stage1').html('<p> Firstname: ' + jd.firstname + '</p>');
            $('#stage1').append('<p>Lastname : ' + jd.lastname+ '</p>');
            $('#stage1').append('<p> Age: ' + jd.age+ '</p>');
        });
    });


    // callback for button 2
    $("#button2").click(function(event){
        $.getJSON('/api_test2', {city: "Paris"},function(jd) {
            $('#stage2').html('<p> Firstname: ' + jd.firstname + '</p>');
            $('#stage2').append('<p>Lastname : ' + jd.lastname+ '</p>');
            $('#stage2').append('<p> Age: ' + jd.age+ '</p>');
            $('#stage2').append('<p> Intro: ' + jd.intro+ '</p>');
        });
    });

});


$(window).load(function() {
    // executes when complete page is fully loaded, including all frames, objects and images
    console.log("window is loaded");
});
