(function () {
  const gnbLinks = document.querySelectorAll(".gnb_link");
  const navBar = document.querySelector(".nav_bar");
  const active = document.querySelector(".active");

  // 활성화된 페이지에 navBar 생성
  function setNavBar() {
    if (active) {
      // active item variables
      const activeWidth = active.offsetWidth;
      const activeLeft = active.offsetLeft;

      // set navBar
      navBar.style.width = `${activeWidth}px`;
      navBar.style.left = `${activeLeft}px`;
    }
  }

  setNavBar();

  function handleNav(event) {
    // gnb variables
    const gnbWidth = event.target.offsetWidth;
    const gnbLeft = event.target.offsetLeft;

    // set navBar
    navBar.style.width = `${gnbWidth}px`;
    navBar.style.left = `${gnbLeft}px`;
  }

  // event listeners
  gnbLinks.forEach((gnbLink) => {
    gnbLink.addEventListener("mouseenter", handleNav);
    gnbLink.addEventListener("mouseleave", setNavBar);
  });
})();
