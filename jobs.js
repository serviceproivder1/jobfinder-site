document.addEventListener("DOMContentLoaded", () => {
  const jobList = document.getElementById("job-list");

  // Show loading message
  jobList.innerHTML = "<p>Loading jobs...</p>";

  fetch("https://indeed12.p.rapidapi.com/company/Ubisoft/jobs?locality=us&start=1", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "indeed12.p.rapidapi.com",
      "x-rapidapi-key": "846aee7634msh55dee4247691b9dp1a8651jsn9a2a40b7303a"
    }
  })
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(data => {
      if (!data.jobs || data.jobs.length === 0) {
        jobList.innerHTML = "<p>No jobs found.</p>";
        return;
      }

      // Clear the loading message
      jobList.innerHTML = "";

      data.jobs.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.className = "job-card";

        jobCard.innerHTML = `
          <h3>${job.title}</h3>
          <p><strong>Company:</strong> ${job.company_name || "Ubisoft"}</p>
          <p><strong>Location:</strong> ${job.location || "N/A"}</p>
          <p><strong>Posted:</strong> ${job.date_posted || "N/A"}</p>
          <a href="${job.url}" target="_blank" class="apply-btn">Apply Now</a>

        `;

        jobList.appendChild(jobCard);
      });
    })
    .catch(error => {
      console.error("Error fetching jobs:", error);
      jobList.innerHTML = "<p>Failed to load jobs. Please try again later.</p>";
    });
});
