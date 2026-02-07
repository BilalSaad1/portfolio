const grid = document.getElementById("projectsGrid");
document.getElementById("year").textContent = new Date().getFullYear();

function card(p) {
  const tags = p.tags.map(t => `<span class="tag">${t}</span>`).join("");
  const demoBtn = p.demo
    ? `<a class="btn small" href="${p.demo}" target="_blank" rel="noreferrer">Live Demo</a>`
    : "";

  return `
    <div class="card">
      <div class="project-title">
        <h3>${p.title}</h3>
        <a class="btn small" href="${p.repo}" target="_blank" rel="noreferrer">Repo</a>
      </div>

      <p class="project-desc">${p.desc}</p>

      <div class="tag-row">${tags}</div>

      <div class="project-actions">
        ${demoBtn}
        <a class="btn small ghost" href="${p.repo}" target="_blank" rel="noreferrer">Details</a>
      </div>
    </div>
  `;
}

grid.innerHTML = window.PROJECTS.map(card).join("");
