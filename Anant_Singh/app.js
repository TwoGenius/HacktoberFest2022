//Movement animation to happen
const card = document.querySelector('.card');
const container = document.querySelector('.containercard');




container.addEventListener('mousemove', (e) => {
    // console.log(e.pageX, e.pageY);//will give the position
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;//whole width of the monitor
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;//whole width of the monitor
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//Animate In
container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';
    // //Popout Effect
    // title.style.transform = 'translateZ(150px)';
})

//Animate Out
container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    // //popback
    // title.style.transform = 'translateZ(0px)';

})
