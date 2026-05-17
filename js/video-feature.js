const featureVideo = document.getElementById('featureVideo');
const videoOverlay = document.getElementById('videoOverlay');
const playBtn = document.getElementById('playBtn');

if (featureVideo && videoOverlay && playBtn) {

    videoOverlay.addEventListener('click', function () {
        featureVideo.play();
        videoOverlay.classList.add('hidden');
    });

    featureVideo.addEventListener('click', function () {
        if (featureVideo.paused) {
            featureVideo.play();
            videoOverlay.classList.add('hidden');
        } else {
            featureVideo.pause();
            videoOverlay.classList.remove('hidden');
        }
    });

    featureVideo.addEventListener('ended', function () {
        videoOverlay.classList.remove('hidden');
        playBtn.textContent = '↺';
        playBtn.setAttribute('aria-label', 'Replay highlight reel');
    });

    featureVideo.addEventListener('play', function () {
        playBtn.textContent = '▶';
        playBtn.setAttribute('aria-label', 'Play highlight reel');
    });

}
