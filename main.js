const navLinks = document.getElementById("nav-links");
const menuBtn = document.getElementById("menu-btn");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__content .header__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

//contact form container
document.addEventListener("DOMContentLoaded", function () {
  // Select form and status div
  const form = document.getElementById("contact-form");
  const statusDiv = document.getElementById("form-status");

  if (!form) {
    // agar form nahi milta, error console me dikha de
    console.error("Contact form not found in the document.");
    return;
  }

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    // FormData se saare fields uthao
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // agar submit successful ho gaya
        statusDiv.innerText = "🎉 Message sent successfully!";
        statusDiv.style.color = "green";
        form.reset();
      } else {
        // agar error response aaya
        const data = await response.json();
        if (data.errors) {
          // agar Formspree validation errors bheje ho
          statusDiv.innerText = data.errors.map(error => error.message).join(", ");
        } else {
          statusDiv.innerText = "❌ Oops! There was a problem submitting your form.";
        }
        statusDiv.style.color = "red";
      }
    } catch (error) {
      // agar network issue ya kisi aur type ka error ho
      statusDiv.innerText = "⚠️ Network error. Please try again later.";
      statusDiv.style.color = "orange";
      console.error("Form submission error: ", error);
    }
  });
});

// about container
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// service container
ScrollReveal().reveal(".service__card", {
  ...scrollRevealOption,
  interval: 500,
});

// portfolio container
ScrollReveal().reveal(".portfolio__card", {
  duration: 1000,
  interval: 500,

});
