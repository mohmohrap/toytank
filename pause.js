// Select all audio and video elements
    const mediaElements = document.querySelectorAll('audio, video');
//listen to play event
mediaElements.forEach(media => {
        media.addEventListener('play', () => {
            // Pause all other media when one starts playing
            mediaElements.forEach(otherMedia => {
                if (otherMedia !== media) {
                    otherMedia.pause();
                }
            });
        });
});