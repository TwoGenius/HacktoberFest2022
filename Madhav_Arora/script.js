$(document).ready(function () {
    $(window).scroll(function () {

        // Sticky Navbar On Scroll Script Start

        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Sticky Navbar On Scroll Script End


        // Scroll-Up Button Show/Hide Script Start

        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

        // Scroll-Up Button Show/Hide Script End
    });

    // Slide-Up Script Start

    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });

        // Removing Smooth Scroll On Slide-Up Button Click Start

        $('html').css("scrollBehavior", "auto");

        // Removing Smooth Scroll On Slide-Up Button Click End

    });

    $('.navbar .menu li a').click(function () {

        // Applying Again Smooth Scroll On Menu Items Click Start

        $('html').css("scrollBehavior", "smooth");

        // Applying Again Smooth Scroll On Menu Items Click End

    });

    // Slide-Up Script End


    // Toggle Menu/Navbar Script Start

    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Toggle Menu/Navbar Script End


    // Typing Text Animation Script Start

    var typed = new Typed(".typing", {
        strings: ["Learner", "Developer", "Designer", "Coder"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Learner", "Developer", "Designer", "Coder"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Typing Text Animation Script End

});