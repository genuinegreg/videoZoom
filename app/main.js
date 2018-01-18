const body = document.getElementById('body');
const video = document.getElementById('video');
const info = document.getElementById('info');

let zoom = .5;
let x = 0;
let y = 0;


body.addEventListener('wheel', (event) => {
    let _zoom = zoom - event.deltaY / 50;
    zoom = _zoom < .1 ? .1 : ((_zoom > 2) ? 2 : _zoom)
    info.innerText = `zoom ${zoom}`;

})

body.addEventListener('mousemove', (event) => {

    // console.log(event.target.clientWidth);
    x = event.x - (event.target.clientWidth / 2);
    y = event.y - (event.target.clientHeight / 2);

})


function animate() {
    video.style.transform = `scale(${zoom}) translate(${x}px, ${y}px)`;
    requestAnimationFrame(animate)
}

animate();
