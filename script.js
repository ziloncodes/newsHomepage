const nav = document.querySelector(".sidebar");

      function toggleNav() {
        event.preventDefault();
        nav.classList.toggle("hidden");
      }

      document.querySelector(".menu-btn").addEventListener("click", toggleNav);
      document.querySelector(".close-btn").addEventListener("click", toggleNav);