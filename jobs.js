document.addEventListener("DOMContentLoaded", () => {
  const jobList = document.getElementById("job-list");
  jobList.innerHTML = "<p>Loading jobs...</p>";

  fetch('https://indeed12.p.rapidapi.com/company/Ubisoft/jobs?locality=us&start=1', {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'indeed12.p.rapidapi.com',
      'x-rapidapi-key': '846aee7634msh55dee4247691b9dp1a8651jsn9a2a40b7303a'
    }
  })
    .then(response => response.json())
    .then(data => {
      jobList.innerHTML = ""; // Clear loading text

      if (!data || !data.jobs || data.jobs.length === 0) {
        jobList.innerHTML = "<p>No jobs found.</p>";
        return;
      }

      data.jobs.forEach(job => {
        const jobDiv = document.createElement("div");
        jobDiv.className = "job-card";

        jobDiv.innerHTML = `
          <h3>${job.title}</h3>
          <p><strong>Location:</strong> ${job.location}</p>
          <p><strong>Posted:</strong> ${job.date}</p>
          <p><strong>Description:</strong> ${job.description}</p>
          <a href="${job.url}" target="_blank" class="apply-btn">Apply Now</a>
        `;

        jobList.appendChild(jobDiv);
      });
    })
    .catch(error => {
      console.error("Error fetching jobs:", error);
      jobList.innerHTML = "<p>Failed to load jobs. Please try again later.</p>";
    });
});
