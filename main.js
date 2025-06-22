document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("jobs-container");

  jobs.forEach(job => {
    const card = document.createElement("div");
    card.className = "job-card";
    card.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>${job.company}</strong> - ${job.location}</p>
      <p>${job.description}</p>
      <a href="${job.link}" target="_blank"><button>Apply Now</button></a>
    `;
    container.appendChild(card);
  });
});
