document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Render project cards
  const grid = document.getElementById("projectsGrid");
  if (grid && window.PROJECTS) {
    window.PROJECTS.forEach(p => {
      const card = document.createElement("a");
      card.className = "card";
      card.href = p.repo;
      card.target = "_blank";
      card.rel = "noreferrer";
      card.innerHTML =
        `<h3>${p.title}</h3>` +
        `<p class="muted">${p.desc}</p>` +
        `<div class="chips">${p.tags.map(t => `<span class="chip">${t}</span>`).join("")}</div>`;
      grid.appendChild(card);
    });
  }

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