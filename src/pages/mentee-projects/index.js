import React from "react"
import ProjectsComp from "./projects"

const MenteeProjectsPage = () => (
  <>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article
          class="tile is-child box"
          style={{ border: "3px solid mediumslateblue" }}
        >
          {/* <h1 class="title">Project Showcase</h1> */}
          {/* <p class="subtitle">Our past mentees' projects.</p> */}
          <ProjectsComp />
        </article>
      </div>
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article
          class="tile is-child box"
          style={{ border: "3px solid turquoise" }}
        >
          <h1 class="title">What our mentee alumni say about TMP</h1>

          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="message is-dark tile is-child box">
                <div class="message-body">
                  <p>
                    <q>
                      I learned to talk to people in a more professional way and
                      not feel very awkward like I did before.
                    </q>
                  </p>
                  <figcaption>
                    &mdash; Carly, Sophomore at Mills High School
                  </figcaption>
                </div>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="message is-dark tile is-child box">
                <div class="message-body">
                  <p>
                    <q>
                      I enjoyed meeting with my mentor every week because I knew
                      I was going to end the call with new knowledge.
                    </q>
                  </p>
                  <figcaption>
                    &mdash; Gabi, Junior at Mills High School
                  </figcaption>
                </div>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="message is-dark tile is-child box">
                <div class="message-body">
                  <p>
                    <q>
                      ... since we have weekly meetings, I get a lot of practice
                      to talk and explain my concerns to other people.
                    </q>
                  </p>
                  <figcaption>
                    &mdash; Rick, Freshman at UC Riverside
                  </figcaption>
                </div>
              </article>
            </div>
          </div>

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
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article class="tile is-child box" style={{ border: "3px solid gold" }}>
          <h1 class="title">What our mentor alumni say about TMP</h1>

          <div class="tile is-ancestor">
            <div class="tile is-parent">
              <article class="message is-dark tile is-child box">
                <div class="message-body">
                  <p>
                    <q>
                      It's a very rewarding experience to be able to see the
                      amount of creativity and energy from the mentees and to be
                      able to watch them grow through the course of their
                      project!
                    </q>
                  </p>
                  <figcaption>&mdash; Bijun, Designer at Reddit</figcaption>
                </div>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="message is-dark tile is-child box">
                <div class="message-body">
                  <p>
                    <q>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis
                      feugiat facilisis.
                    </q>
                  </p>
                  <figcaption>
                    &mdash; Chris, Business Operations Coordinator at Facebook
                  </figcaption>
                </div>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="message is-dark tile is-child box">
                <div class="message-body">
                  <p>
                    <q>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis
                      feugiat facilisis.
                    </q>
                  </p>
                  <figcaption>
                    &mdash; Brandon, Software Developer at Kuna Systems
                  </figcaption>
                </div>
              </article>
            </div>
          </div>

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
  </>
)

export default MenteeProjectsPage
