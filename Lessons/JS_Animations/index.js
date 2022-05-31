import anime from "animejs";

// Selected Button
const button = document.querySelector(".start");

// Create Timeline
const timeline = anime.timeline({
  easing: "easeInOutSine",
  autoplay: false,
  complete: () => timeline.reverse()
});

timeline.add({
  targets: ".title",
  opacity: [0, 1],
  duration: 500
})

timeline.add({
  targets: ".words > h2",
  opacity: [0, 1],
  translateY: [25, 0],
  delay: anime.stagger(500),
  duration: 500
})

timeline.add({
  targets: ".circle",
  scale: [0, 1],
  duration: 500
})

// Run the animation on click
button.addEventListener("click", () => timeline.play())