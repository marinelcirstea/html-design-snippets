const links = document.querySelectorAll(".nav__link");
for (const link of links) {
  link.addEventListener("mousemove", (e) => {
    link.classList.add("active");
    link.querySelector(".nav__link-reveal").style.transform = `translate(${
      e.clientX - 150
    }px, -${e.clientY / 2}px)  rotate(${e.clientX / 100}deg)`;
  });

  link.addEventListener("mouseleave", (e) => {
    link.classList.remove("active");
    link.querySelector(
      ".nav__link-reveal"
    ).style.transform = `translate(-150px)`;
  });
}
