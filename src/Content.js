import "./content.css";

function app() {
  return (
    <div class="horizontal-section">
      <div class="left-side">
        <a
          href="https://github.com/tejashhxd"
          target="_blank"
          class="github-link"
        >
          GitHub
        </a>
      </div>

      <div class="right-side">
        <h3>Qualifications</h3>
        <div class="card">
          <h3>Class 10th</h3>
          <p>CBSE - 86%</p>
        </div>
        <div class="card">
          <h3>Class 12th - PCM + CS</h3>
          <p>CBSE - 86.6%</p>
        </div>
        <div class="card">
          <h3>Techno Main Salt Lake</h3>
          <p>Cse AI/ML 1st year</p>
        </div>
      </div>
    </div>
  );
}

export default app;
