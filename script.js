(function () {
  const menuBtn = document.getElementById("menuBtn");
  const nav = document.getElementById("siteNav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(open));
    });

    nav.querySelectorAll("a").forEach(a => {
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
      });
    });
  }

  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
})();