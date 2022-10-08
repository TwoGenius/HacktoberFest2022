let about = ["Hey there! I am a professional Web Developer", "I am capable of working with Linux environment", "An AI and ML enthusiast", "Interested in learning new tech stacks", "Enjoys working with a team !"];
let i = 0;

setInterval(function () {
    $(".about-content").text(about[i]);
    i = (i+1)%(about.length);
}, 4000)
