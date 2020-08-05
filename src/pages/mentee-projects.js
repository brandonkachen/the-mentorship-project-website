import React from "react"

const MenteeProjectsPage = () => (
  <div class="tile is-ancestor">
    <div class="tile is-8 is-parent">
      <article
        class="tile is-child box"
        style={{ border: "4px solid mediumslateblue" }}
      >
        <h1 class="title">Project Showcase</h1>
        <p class="subtitle">Here are some of our past mentee projects.</p>
        <p>
          <span role="img" aria-label="construction-signs">
            🚧🚧🚧
          </span>
          We're under construction right now, please check back soon.
          <span role="img" aria-label="construction-sign">
            🚧🚧🚧
          </span>
        </p>
      </article>
    </div>
    <div class="tile is-parent">
      <article
        class="tile is-child box"
        style={{ border: "4px solid turquoise" }}
      >
        <h1 class="title">What our mentee alumni say about TMP</h1>
        {/* <div class="tabs is-toggle is-centered is-small is-toggle-rounded">
          <ul>
            <li class="is-active">
              <a>
                <span>Mentees</span>
              </a>
            </li>
            <li>
              <a>
                <span>Mentors</span>
              </a>
            </li>
          </ul>
        </div> */}
        <div class="message-body">
          <q>
            I learned to talk to people in a more professional way and not feel
            very awkward like I did before.
          </q>
        </div>

        <br></br>

        <div class="message-body">
          <q>
            I enjoyed meeting with my mentor every week because I knew I was
            going to end the call with new knowledge.
          </q>
        </div>

        <br></br>

        {/* <footer class="card-footer">
          <a href="#" class="card-footer-item">
            Mentees
          </a>
          <a href="#" class="card-footer-item">
            Mentors
          </a>
        </footer> */}
      </article>
    </div>
  </div>
)

export default MenteeProjectsPage
