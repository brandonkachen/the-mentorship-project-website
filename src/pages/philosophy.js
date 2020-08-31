import React from "react"
import PaginationComp from "../components/pagination"

const summaryPage = (
  <>
    <p className="subtitle">Summary</p>
    <div className="content is-philosophy-page">
      <ul>
        <li>
          Good mentorship is a symbiotic relationship.{" "}
          <span role="img" aria-label="confetti ball">
            🎊
          </span>
        </li>
        <li>
          Building a personal project is one of the best ways to learn.{" "}
          <span role="img" aria-label="hammer and pick">
            ⚒️
          </span>
        </li>
        <li>
          People have varied career interests they should explore at their own
          pace.{" "}
          <span role="img" aria-label="compass">
            🧭
          </span>
        </li>
      </ul>
    </div>
  </>
)

const goodMentorshipPage = (
  <>
    <p className="subtitle">Good mentorship</p>
    <p className="content is-philosophy-page">
      Good mentorship is a positive sum game for all involved. Mentors see the
      potential in their mentees and push them to achieve it. Mentees spark
      selfless joy in their mentees when they reach their goals. Both parties
      grow and bond through these interactions, which in turn builds their
      relationship.{" "}
      <span role="img" aria-label="raised hands">
        🙌
      </span>
    </p>
  </>
)

const personalProjectsPage = (
  <>
    <p className="subtitle">Personal Projects</p>
    <p className="content is-philosophy-page">
      Personal projects allow one to own a problem or idea they want to solve.
      As a result, they are more likely to feel motivated and creative when
      working on it. They are free to change it as they see fit, safe to fail
      and reiterate to improve it, and empowered to judge when it is done or
      good enough. Learning takes place easily in this environment.{" "}
      <span role="img" aria-label="gear">
        ⚙️
      </span>
    </p>
  </>
)

const variedInterestsPage = (
  <>
    <p className="subtitle">Varied Interests</p>
    <p className="content is-philosophy-page">
      People aren't destined for only one career path. Everyone's career
      interests are varied based on their background, natural curiosity, etc.
      but it is uncommon for one to dabble and learn about them more. We believe
      it is valuable to learn about one's fields of interest, even if they do
      not pursue it professionally.{" "}
      <span role="img" aria-label="100%">
        💯
      </span>
    </p>
  </>
)

const philosophyPages = [
  summaryPage,
  goodMentorshipPage,
  personalProjectsPage,
  variedInterestsPage,
]

const PhilosophyComp = () => (
  <PaginationComp title="Our Philosophy" pages={philosophyPages} />
)

export default PhilosophyComp
