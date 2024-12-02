// Select all audio and video elements
const mediaElements = document.querySelectorAll('audio, video');
const youtubeIframes = document.querySelectorAll('iframe');

function pauseAll(exceptElement) {
    mediaElements.forEach(
        media => {
            if (
                media !== exceptElement
            ) {
                media.pause();
            }
        }
    );
    youtubeIframes.forEach(
        ifrrame => {
            const player = ifrrame.player;
            if (player && player.getPlayerState()
                == 1) {
                player.pauseVideo();
            }
        }
    );
}

//listen to play event
mediaElements.forEach(media => {
    media.addEventListener('play', () =>
        // Pause all other media when one starts playing
        pauseAll(media));
}
);
function onYouTubeIframeAPIReady() {
    youtubeIframes.forEach(
        ifrrame, {
        events: {
            onStateChange: event => {
                if (event.data === 1) {
                    pauseAll(iframe);
                }
            }
        }
    }
    );
    iframe.player = player;
}