document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    const videos = document.querySelectorAll(".background-video");

    // Reducir la velocidad de los videos
    videos.forEach(video => {
        video.playbackRate = 0.5; // Velocidad al 50%
    });

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            if (window.location.pathname.endsWith(href) || (href === "index.html" && window.location.pathname === "/")) {
                e.preventDefault();
                return;
            }
            e.preventDefault();
            document.body.style.animation = "slide-out 1s ease-in forwards";
            
            setTimeout(() => {
                window.location.href = href;
            }, 1000);
        });
    });

    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
        document.body.classList.add("index");
    }
});