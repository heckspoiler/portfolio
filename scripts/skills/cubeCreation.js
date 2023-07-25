const skillsSection = document.querySelector("#skills");

function doofus() {
  setTimeout(() => {
    for (let i = 0; i < 37; i++) {
      let cube = document.createElement("div");
      cube.className = "cube-test";
      cube.style.left = Math.random() * window.innerWidth + "px";
      cube.style.top = (Math.random() * window.innerHeight) / 1.5 + "px";
      cube.style.opacity = 0;

      setTimeout(() => {
        cube.style.opacity = 1;
      }, 500);

      let finalPositionX = Math.random * 1000 + "px";
      let finalPositionY = Math.random * 1000 + "px";

      cube.dataset.finalPositionX = finalPositionX;
      cube.dataset.finalPositionY = finalPositionY;

      skillsSection.appendChild(cube);

      // gsap.to(".cube-test", {
      //   duration: 2,
      //   y: function (target) {
      //     return (
      //       skillsSection.getBoundingClientRect().bottom -
      //       target.getBoundingClientRect().top
      //     );
      //   },
      //   ease: "bounce", // bounce at the end
      // });
    }
  }, 2500);
}

doofus();
