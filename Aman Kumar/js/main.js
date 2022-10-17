const randomNumber = Math.floor(Math.random() * 4) + 1,
    imageURL =
    "https://res.cloudinary.com/dbvthtwhc/image/upload/v1613020555/portfolio/images",
    skillsIcon =
    "https://res.cloudinary.com/dbvthtwhc/image/upload/v1613020554/portfolio/icons";

function nav() {
    if (screen.width <= 875) {
        $(".nav-links").toggleClass("nav-active");

        // animating item list
        $(".nav-links li").each(function (index) {
            this.style.animation ?
                (this.style.animation = '') :
                (this.style.animation = `navlinkfade 500ms ease forwards ${index / 10 + 0.2}s`);
        });

        // animating the hamBurger button
        $(".hamBurger").toggleClass("toggleCancel");

        // toggling overflow when hamBurger is clicked
        if (screen.width <= 875) $("body").toggleClass("removeOverflow");
    }
}

experienceLists();
projectLists();
skillsLists();

$(document).ready(function () {
    switch (randomNumber) {
        case 1:
            $("#loader").addClass("loaded1");
            break;
        case 2:
            $("#loader").addClass("loaded2");
            break;
        case 3:
            $("#loader").addClass("loaded3");
            break;
        case 4:
            $("#loader").addClass("loaded4");
            break;
        default:
            $("#loader").addClass("loaded1");
    }

    $("canvas").addClass("canvasLoaded");
    $(".navBar").addClass("navBarLoaded");
    $(".intro").addClass("introLoaded");

    // text animation
    const text = baffle(".reveal");
    text.set({
        characters: "▓░▒ ▒/░▒░ ▓██<░ /▓░ /▒█░> ▓░▓▒ ░<▓ █░█▒ /░██",
        speed: 100,
    });
    text.start();
    text.reveal(2350, 1000);

    // navigation bar
    $(".hamBurger").click(nav);
    $(".nav-links li").click(nav);

    // adding divs for hover animation
    $("#skills .card").each(function () {
        for (let i = 0; i < 4; i++)
            $(this).prepend('<span class="borderAnimation"></span>');
    });

    // for visiting website
    $(".visit").click(function () {
        window.open($(this).attr("data-ref"), "_blank");
    });

    // for smooth scrolling
    $("#contact .container .logo").click(() =>
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        })
    );

    $(".navBar .nav-links li a").each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            document.querySelector(`#${$(this).attr("class")}`).scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest",
            });
        });
    });

    $(".navBar .logo").click(() => location.reload(true));

    // making chevron work
    $(window).scroll(() =>
        window.scrollY >= $("#about").offset().top ?
            $(".goToTop").addClass("goToTop-active") :
            $(".goToTop").removeClass("goToTop-active")
    );

    $(".goToTop").click(() =>
        document.querySelector("#particles-js").scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        })
    );
});

function experienceLists() {
    let content = document.querySelector("#experience .content");
    content.innerHTML = experience.map((elm) => `
        <div class="card">
            <h1 class="card-header">
                <p class="title">
                    <img src="${elm.img}" alt="">
                    <a href="${elm.link}">${elm.title}</a>
                </p>
                <p>${elm.profile}</p>
            </h1>
            <div class="card-content">
                <p class="disc">${elm.disc}</p>
                <ul>
                    ${experienceDetailsList(elm.details)}
                </ul>
                <p class="time-span">${elm.time}</p>
            </div>
        </div>`).join("");
}

function experienceDetailsList(details) {
    let list = "";
    details.forEach((elm) => (list += `<li>${elm}</li>`));
    return list;
}

function projectLists() {
    let content = document.querySelector("#projects .content");
    content.innerHTML = projects.map((data, i) => `
        <div class="project">
            <div class="list-number">
                <h1>${i + 1 < 10 ? "0" + (i + 1) : i + 1}</h1>
            </div>
            <img src="${imageURL}/${data.img}" alt="${data.title}">
            <div class="project-text">
                <p class="project-title">${data.title}</p>
                <p class="project-disc">${data.desc}</p>
                <div class="btn">
                    <button class="visit" data-ref="${data.link}"> Visit Website 
                        <i class="far fa-long-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>`).join("");
}

function skillsLists() {
    let content = document.querySelector("#skills .content");
    content.innerHTML = skillSet.map((elm) =>
        `<div class="card">
            <h1 class="card-header">${elm.name}</h1>
            <div class="card-content"> ${skillsDetailsList(elm.skills)} </div>
        </div>`).join("");
}

function skillsDetailsList(skills) {
    let details = "";
    skills.forEach((skill) => {
        details += `
        <div>
            <img class="skill-img" alt="${skill.title.toLowerCase()}" src="${skillsIcon}/${skill.img}">
            <p class="skill-name">${skill.title}</p>
        </div>`;
    });
    return details;
}

$(window).on("load", () => setTimeout(() => window.scrollTo(0, 0), 0));