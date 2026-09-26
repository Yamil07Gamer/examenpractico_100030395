document.addEventListener('click', function playAudio(){
    const audio = document.getElementById('musicafondo');
    audio.volume = 0.15;
    audio.play();

    document.removeEventListener('click', playAudio);
}, {once:true});





function gyaru(){
    const audio = document.getElementById("ado_say_gyaru");
    audio.currentTime = 0;
    audio.volume = 0.5;
    audio.play().catch(error => console.log("Reproducción bloqueada temporalmente"));
}