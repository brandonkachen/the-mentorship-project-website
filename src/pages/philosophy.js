import React from "react"

const PhilosophyPage = () => (
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <div class="tile is-child box" style={{ border: "4px solid turquoise" }}>
        <h1 class="title">Value to Mentees</h1>
        {/* <p class="subtitle">Here are some of our past mentee projects.</p> */}
        <p>As a mentee, you'll:</p>
        <ul>
          <li>
            learn more about a new field you may wish to build a career in
          </li>
          <li>grow your portfolio and resume</li>
          <li>
            expand your network through the other mentors and mentees you meet.
          </li>
        </ul>
      </div>
    </div>
    <div class="tile is-parent">
      <article
        class="tile is-child box"
        style={{ border: "4px solid mediumslateblue" }}
      >
        <h1 class="title">Value to Mentors</h1>
        <p>As a mentor, you'll:</p>
        <ul>
          <li>
            experience joy and excitement when you see your mentee succeed,
            knowing you've played a role in their success.
          </li>
          <li>
            improve your communication skills by teaching someone else about a
            topic you are knowledgeable about.
          </li>
          <li>
            expand your network through the other mentors and mentees you meet.
          </li>
        </ul>
      </article>
    </div>
  </div>
)

export default PhilosophyPage
