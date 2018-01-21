const body = document.getElementById('controls');
const video = document.getElementById('main');
const info = document.getElementById('info');

let zoom = 1;
let x = 0;
let y = 0;


let ytId = location.hash.slice(1);
if (!ytId) {
    console.error('No yt id');
}


console.log(ytId)
let player = videojs('video', {
        controls: true,
        autoplay: true,
        preload: 'auto',
        techOrder: ["youtube"],
        sources: [{"type": "video/youtube", "src": 'https://www.youtube.com/watch?v=' + ytId}]

    })
;


player.play();
console.log

info.innerText = `zoom ${zoom}`;

body.addEventListener('wheel', (event) => {
    let _zoom = zoom - event.deltaY / 50;
    zoom = _zoom < .1 ? .1 : ((_zoom > 3) ? 3 : _zoom)
    info.innerText = `zoom ${zoom}`;
})

body.addEventListener('mousemove', (event) => {
    x = event.x - (event.target.clientWidth / 2);
    y = event.y - (event.target.clientHeight / 2);
})


function animate() {
    main.style.transform = `scale(${zoom}) translate(${x}px, ${y}px)`;
    requestAnimationFrame(animate)
}

animate();