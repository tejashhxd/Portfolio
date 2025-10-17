import './skills.css'

function app() {
  return (
    <div class="skills-section">
      <h2>Technical Skills</h2>
      <div class="skills-container">
        <a
          href="https://developer.mozilla.org/en-US/docs/Learn"
          target="_blank"
          rel='noreferrer'
          class="skill-card"
        >
          <h3>Web Development</h3>
          <p>HTML, CSS, JavaScript, React.js</p>
        </a>

        <a href="https://git-scm.com/" target="_blank" rel='noreferrer' class="skill-card">
          <h3>Version Control</h3>
          <p>Git & GitHub</p>
        </a>

        <a href="https://isocpp.org/" target="_blank" rel='noreferrer' class="skill-card">
          <h3>Programming Languages</h3>
          <p>C++ (used for problem-solving & DSA)</p>
        </a>

        <a href="https://leetcode.com/" target="_blank" rel='noreferrer' class="skill-card">
          <h3>Problem Solving</h3>
          <p>LeetCode (basic to intermediate problems)</p>
        </a>
      </div>
    </div>
  );
}

export default app;
