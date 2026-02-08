document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const toggleBtn = document.getElementById("toggleResume");
  const resumePanel = document.getElementById("resumePanel");

  if (toggleBtn && resumePanel) {
    toggleBtn.textContent = resumePanel.classList.contains("is-hidden")
      ? "Show Resume"
      : "Hide Resume";

    toggleBtn.addEventListener("click", () => {
      const hidden = resumePanel.classList.toggle("is-hidden");
      toggleBtn.textContent = hidden ? "Show Resume" : "Hide Resume";
      toggleBtn.setAttribute("aria-expanded", hidden ? "false" : "true");
    });
  }

});