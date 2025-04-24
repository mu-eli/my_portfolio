document.addEventListener("DOMContentLoaded", () => {
  const currentPage = location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".main-nav--link");
  navLinks.forEach((link) => {
    if (
      link.getAttribute("href") === currentPage ||
      (currentPage === "" && link.getAttribute("href") === "index.html")
    ) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const messageDiv = document.getElementById("formMessage");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch("mail.php", {
        method: "POST",
        body: formData,
      });

      const text = await response.text();
      messageDiv.textContent = text;
      messageDiv.style.color = response.ok ? "green" : "red";

      if (response.ok) {
        form.reset();
      }
    } catch (error) {
      messageDiv.textContent = "Something went wrong. Please try again.";
      messageDiv.style.color = "red";
    }
  });
});
