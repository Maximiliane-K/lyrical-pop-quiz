function hideIntroSection() {
    let show = document.getElementsByClassName("intro");
    if (show.style.display === "none") {
        show.style.display = "block";
      } else {
        show.style.display = "none";
      }
}
