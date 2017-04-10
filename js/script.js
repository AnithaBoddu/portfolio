$(document).ready(function () {
    $(window).on("load resize scroll", function () {
        var scrollPos = $(window).scrollTop();
        var aboutOffset = $('#about').position().top * 0.94;
        var projectsOffset = $('#projects').position().top * 0.97;
        var contactOffset = $('#footer').position().top * 0.9815;

        if (scrollPos < aboutOffset) {
            $('#masthead-nav a').css({'background': '#254441', 'color': '#FFFFFF'});
            $('#about-nav a').css({'background': '#254441', 'color': '#FFFFFF'});
            $('#projects-nav a').css({'background': '#254441', 'color': '#FFFFFF'});
            $('#contact-nav a').css({'background': '#254441', 'color': '#FFFFFF'})
        } else if (scrollPos >= aboutOffset && scrollPos < projectsOffset) {
            $('#masthead-nav a').css({'background': '#254441', 'color': '#FFFFFF'});
            $('#about-nav a').css({'background': '#EF3054', 'color': '#06080D'});
            $('#projects-nav a').css({'background': '#254441', 'color': '#FFFFFF'});
            $('#contact-nav a').css({'background': '#254441', 'color': '#FFFFFF'})
        } else if (scrollPos >= projectsOffset && scrollPos < contactOffset) {
            $('#masthead-nav a').css({'background': '#254441', 'color': '#FFFFFF'});
            $('#about-nav a').css({'background': '#254441', 'color': '#FFFFFF'});
            $('#projects-nav a').css({'background': '#43AA8B', 'color': '#06080D'});
            $('#contact-nav a').css({'background': '#254441', 'color': '#FFFFFF'})
        } else {
            $('#masthead-nav a').css({'background': '#254441', 'color': '#FFFFFF'});
            $('#about-nav a').css({'background': '#254441', 'color': '#FFFFFF'});
            $('#projects-nav a').css({'background': '#254441 ', 'color': '#FFFFFF'});
            $('#contact-nav a').css({'background': '#B2B09B', 'color': '#FFFFFF'})
        }
    });
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}