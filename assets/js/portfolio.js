// Keep native video controls available when JavaScript is disabled.
document.querySelectorAll(".portfolio-media video").forEach((video) => {
  const button = video.parentElement.querySelector(".portfolio-play");
  if (!button) return;

  button.hidden = false;
  video.addEventListener("play", () => {
    button.hidden = true;
  });
  video.addEventListener("error", () => {
    button.hidden = true;
  });
  button.addEventListener("click", () => {
    video.play().then(
      () => video.focus(),
      () => {
        button.hidden = true;
        video.focus();
      }
    );
  });
});

// Load YouTube only after a play click; the link still works without JavaScript.
document.querySelectorAll(".portfolio-video-launch").forEach((link) => {
  link.addEventListener("click", (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();

    const frame = document.createElement("iframe");
    frame.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(link.dataset.youtubeId)}?autoplay=1&rel=0`;
    frame.title = link.dataset.videoTitle;
    frame.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    link.replaceWith(frame);
    frame.focus();
  });
});
