const grid = document.getElementById("projectsGrid");
const input = document.getElementById("projectSearch");
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

function render(list) {
  grid.innerHTML = list.map(card).join("");
}

function filterProjects(q) {
  const query = q.trim().toLowerCase();
  if (!query) return window.PROJECTS;

  return window.PROJECTS.filter(p => {
    const hay = `${p.title} ${p.desc} ${p.tags.join(" ")}`.toLowerCase();
    return hay.includes(query);
  });
}

render(window.PROJECTS);

input.addEventListener("input", (e) => {
  render(filterProjects(e.target.value));
});
