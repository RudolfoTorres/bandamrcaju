let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    player.classList.remove('active');
}

let player = document.querySelector('iframe');
document.querySelector('#player-btn').onclick = () => {
    player.classList.toggle('active');
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    player.classList.remove('active');
}

lightbox.option({
    'albumLabel': "Imagem %1 de %2",
    'alwaysShowNavOnTouchDevices': true,
    'wrapAround': true
});