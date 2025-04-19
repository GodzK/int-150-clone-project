const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");
menuToggle.addEventListener("click", () => {
  navList.classList.toggle("active");
  menuToggle.textContent = navList.classList.contains("active") ? "✕" : "☰";
});
      const dropdowns = document.querySelectorAll(".dropdown");
      const image = document.getElementById("previewImage");

      dropdowns.forEach((drop) => {
        const header = drop.querySelector(".dropdown-header");

        header.addEventListener("click", () => {
          // ปิด dropdown อื่น
          dropdowns.forEach((d) => {
            if (d !== drop) {
              d.classList.remove("open");
            }
          });

          // toggle dropdown นี้
          const isOpening = !drop.classList.contains("open");
          drop.classList.toggle("open");
          // ถ้าเปิด dropdown นี้ → เปลี่ยนภาพแบบค่อยๆ fade
          if (isOpening) {
            const newImg = drop.getAttribute("data-img");

            // เริ่ม fade out
            image.style.opacity = 0;

            // รอจน fade out เสร็จ แล้วค่อยเปลี่ยน src และ fade in
            setTimeout(() => {
              image.src = newImg;

              // fade in
              image.style.opacity = 1;
            }, 400);
          }
        });
      });

      function scrollCards(direction, containerSelector = ".best-container") {
  const container = document.querySelector(containerSelector);
  const cardWidth = container.querySelector(".best-card, .list-menu div").offsetWidth + 32;
  const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
  container.scrollBy({ left: scrollAmount, behavior: "smooth" });
}

      // Video scaling and border radius on scroll
      window.addEventListener("scroll", () => {
        const video = document.querySelector(".landing-image video");
        const introducing = document.querySelector(".introducing");
        const rect = introducing.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
          const scrollFraction = (windowHeight - rect.top) / windowHeight;
          const scale = 1 - scrollFraction * 0.3;
          const borderRadius = scrollFraction * 15;
          video.style.transform = `scale(${scale})`;
          video.style.borderRadius = `${borderRadius}%`;
        }
      });

      // Fade-in animation for sections
      const sections = document.querySelectorAll(".introducing, .ipad-list, .important, .why-best, .animate-dropdown");
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in");
            }
          });
        },
        { threshold: 0.1 }
      );
      sections.forEach((section) => observer.observe(section));