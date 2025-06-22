const jobs = [
  {
    title: "Frontend Developer",
    company: "TechSoft Ltd.",
    location: "Lahore, Pakistan",
    type: "Full-Time",
    link: "#"
  },
  {
    title: "Backend Developer",
    company: "CodeCraft",
    location: "Remote",
    type: "Part-Time",
    link: "#"
  },
  {
    title: "Graphic Designer",
    company: "Designify",
    location: "Karachi, Pakistan",
    type: "Internship",
    link: "#"
  },
  {
    title: "Digital Marketing Executive",
    company: "MarketX",
    location: "Islamabad, Pakistan",
    type: "Full-Time",
    link: "#"
  }
];

function renderJobs() {
  const jobList = document.getElementById("job-list");
  jobList.innerHTML = "";

  jobs.forEach((job) => {
    const jobItem = document.createElement("div");
    jobItem.classList.add("job");

    jobItem.innerHTML = `
      <h3>${job.title}</h3>
      <p><strong>Company:</strong> ${job.company}</p>
      <p><strong>Location:</strong> ${job.location}</p>
      <p><strong>Type:</strong> ${job.type}</p>
      <a href="${job.link}" target="_blank">Apply Now</a>
    `;

    jobList.appendChild(jobItem);
  });
}

document.addEventListener("DOMContentLoaded", renderJobs);
