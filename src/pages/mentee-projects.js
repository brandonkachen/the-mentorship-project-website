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
      </article>
    </div>
    <div class="tile is-parent">
      <article
        class="tile is-child box"
        style={{ border: "4px solid turquoise" }}
      >
        <h1 class="title">What our alumni say about TMP</h1>
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
      </article>
    </div>
  </div>
)

export default MenteeProjectsPage
