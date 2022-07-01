//ativar e desativar menu
let navbar = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    player.classList.remove('active');
}

//ativar e desativar player
let player = document.querySelector('#iframePlayer');
document.querySelector('#player-btn').onclick = () => {
    player.classList.toggle('active');
    navbar.classList.remove('active');
}

//ativar e desativar menu e player no scroll
window.onscroll = () => {
    navbar.classList.remove('active');
    player.classList.remove('active');
}

//conf da lib lightbox
lightbox.option({
    'albumLabel': "Imagem %1 de %2",
    'alwaysShowNavOnTouchDevices': true,
    'wrapAround': true,
    'disableScrolling': true
});

//alterar url do maps
$('.btnPlace').on('click', function(){
    var urlPlace = this.value;
    document.getElementById('iframeMap').src = urlPlace;
});

