import React from "react"

const PhilosophyPage = () => (
  <>
    <div class="tile is-ancestor">
      <div class="tile is-parent is-3" />
      <div class="tile is-parent">
        <article
          class="tile is-child box content"
          style={{ border: "4px solid #cfd8dc" }}
        >
          <p class="title">Our Beliefs</p>
          <ul>
            <li>Good mentorship is a symbiotic relationship.</li>
            <li>
              Building a personal project is one of the best ways to learn.
            </li>
            <li>People have varied career interests.</li>
          </ul>
        </article>
      </div>
      <div class="tile is-parent is-3" />
    </div>
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article
          class="tile is-child box"
          style={{ border: "4px solid mediumslateblue" }}
        >
          <p class="title">Good mentorship</p>
          <p>
            Good mentorship is a positive sum game for all involved. At its
            core, mentors can see the potential in their mentees and push them
            to achieve it. Mentees, in turn, invoke a selfless joy in their
            mentees when they reach their goals. Both parties grow and bond
            through these interactions, which builds their relationship.
          </p>
        </article>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child box" style={{ border: "4px solid gold" }}>
          <p class="title">Personal Projects</p>
          <p>
            Personal projects allow one to own a problem or idea they want to
            solve. As a result, they are more likely to feel motivated and
            creative when working on it. They are free to change it as they see
            fit, safe to fail and reiterate to improve it, and empowered to
            judge when it is done or good enough. Learning takes place easily in
            this environment.
          </p>
        </article>
      </div>
      <div class="tile is-parent">
        <article
          class="tile is-child box"
          style={{ border: "4px solid turquoise" }}
        >
          <p class="title">Varied Interests</p>
          <div class="content">
            <p>
              People aren't destined for only one career path. Everyone's career
              interests are varied based on their background, natural curiosity,
              etc. but it is uncommon for one to dabble and learn about them
              more. We believe it is valuable to learn about one's fields of
              interest, even if they do not pursue it professionally.
            </p>
          </div>
        </article>
      </div>
    </div>
  </>
)

export default PhilosophyPage
