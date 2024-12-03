// Select all audio and video elements
const mediaElements = document.querySelectorAll('audio, video');
const youtubeIframes = document.querySelectorAll('iframe');

// Function to pause all media except the one playing
function pauseAll(exceptElement) {
    // Pause audio and video elements
    mediaElements.forEach(media => {
        if (media !== exceptElement) {
            media.pause();
        }
    });

    // Pause YouTube iframe videos
    youtubeIframes.forEach(iframe => {
        const player = iframe.player;
        if (player && player.getPlayerState() === 1) { // 1 = playing
            player.pauseVideo();
        }
    });
}

// Listen for 'play' events on audio and video elements
mediaElements.forEach(media => {
    media.addEventListener('play', () => pauseAll(media));
});

// YouTube Iframe API Ready function
function onYouTubeIframeAPIReady() {
    youtubeIframes.forEach(iframe => {
        // Initialize YT.Player for each iframe
        const player = new YT.Player(iframe, {
            events: {
                onStateChange: event => {
                    if (event.data === 1) { // 1 = playing
                        pauseAll(iframe);
                    }
                }
            }
        });
        iframe.player = player; // Attach player instance to the iframe
    });
                }
