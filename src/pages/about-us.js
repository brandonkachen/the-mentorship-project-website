import React, { useState } from "react"
import philosophyPages from "../misc/philosophy"

const PhilosophyComp = () => {
  const [page, setPage] = useState(0)
  const prevOn = page === 0
  const nextOn = page === philosophyPages.length - 1

  const philosophyPagination = (
    <nav
      class="pagination is-rounded"
      role="navigation"
      aria-label="pagination"
    >
      <a
        class="pagination-previous"
        disabled={prevOn}
        onClick={() => !prevOn && setPage((page - 1) % philosophyPages.length)}
      >
        ←
      </a>
      <a
        class="pagination-next"
        disabled={nextOn}
        onClick={() => !nextOn && setPage((page + 1) % philosophyPages.length)}
      >
        →
      </a>
      <ul class="pagination-list" />
    </nav>
  )

  return (
    <>
      {philosophyPages[page]}
      {philosophyPagination}
    </>
  )
}

const AboutUsPage = () => {
  return (
    <>
      <div class="tile is-ancestor">
        <div class="tile is-5 is-vertical is-parent">
          <div
            class="tile is-child box"
            style={{ border: "4px solid mediumslateblue" }}
          >
            <p class="title">What is this program?</p>
            <p>
              <b>The Mentorship Project</b> (TMP) is a one-on-one project-based
              volunteer mentorship program that connects high school students
              (mentees) and industry professionals (mentors).{" "}
              <span role="img" aria-label="light-bulb">
                💡
              </span>
            </p>
            <p>TMP operates completely virtually in 10 week batches.</p>
          </div>
          <div
            class="tile is-child box"
            style={{ border: "4px solid turquoise" }}
          >
            <p class="title">Our Philosophy</p>
            <PhilosophyComp />
          </div>
        </div>
        <div class="tile is-vertical is-parent">
          <div class="tile is-child box" style={{ border: "4px solid gold" }}>
            <p class="title">How does it work?</p>
            <p class="subtitle">
              There are four distinct phases for each batch.
            </p>
            {/* <div class="content"> */}
            <div class="content is-vertical-center">
              <ol>
                <li>
                  <b>Connect</b>: Each mentee is paired with a mentor based on
                  interest and compatibility.{" "}
                  <span role="img" aria-label="link">
                    🔗
                  </span>
                </li>
                <li>
                  <b>Brainstorm</b>: Together, each pair comes up with a project
                  idea that will take 8 weeks to build.{" "}
                  <span role="img" aria-label="calendar">
                    📆
                  </span>
                </li>
                <li>
                  <b>Build</b>: Mentees build out their projects with guidance,
                  support, and accountability from their mentors.{" "}
                  <span role="img" aria-label="rocket">
                    🚀
                  </span>
                  <ul>
                    <li>
                      Each pair meets (virtually) once a week to discuss the
                      mentee's project and progress.{" "}
                      <span role="img" aria-label="handshake">
                        🤝
                      </span>
                    </li>
                    <li>
                      Mentors will help their mentees get up to speed on their
                      fields of expertise.{" "}
                      <span role="img" aria-label="open-book">
                        📖
                      </span>
                    </li>
                    <li>
                      Mentees work on their own projects for 3-6 hours per week
                      between check-ins.{" "}
                      <span role="img" aria-label="memo">
                        📝
                      </span>
                    </li>{" "}
                    <li>
                      Each mentee also share their progress to their fellow
                      students every other week.{" "}
                      <span role="img" aria-label="speech balloon">
                        💬
                      </span>
                    </li>
                  </ul>
                </li>{" "}
                <li>
                  <b>Present</b>: At the end of the program, mentees will
                  present their work to our entire group and invited guests.{" "}
                  <span role="img" aria-label="tada">
                    🎉
                  </span>
                </li>
              </ol>
            </div>
            {/* <nav
            class="pagination is-rounded"
            role="navigation"
            aria-label="pagination"
          >
            <a class="pagination-next">Past Projects</a>
            <ul class="pagination-list" />
          </nav> */}
          </div>
        </div>
      </div>

      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div
            class="tile is-child box content"
            style={{ border: "4px solid mediumslateblue" }}
          >
            <h1 class="title">Value to Mentees 🎏</h1>
            {/* <p class="subtitle">Here are some of our past mentee projects.</p> */}
            <p>As a mentee, you'll:</p>
            <ul>
              <li>
                Learn more about a new field you may wish to build a career in
              </li>
              <li>Grow your portfolio and resume</li>
              <li>
                Expand your network through the other mentors and mentees you
                meet.
              </li>
            </ul>
          </div>
        </div>
        <div class="tile is-parent">
          <article
            class="tile is-child box content"
            style={{ border: "4px solid turquoise" }}
          >
            <h1 class="title">Value to Mentors</h1>
            <p>As a mentor, you'll:</p>
            <ul>
              <li>
                Experience joy and excitement when you see your mentee succeed,
                knowing you've played a role in their success.
              </li>
              <li>
                Improve your communication skills by teaching someone else about
                a topic you are knowledgeable about.
              </li>
              <li>
                Expand your network through the other mentors and mentees you
                meet.
              </li>
            </ul>
          </article>
        </div>
      </div>
    </>
  )
}

export default AboutUsPage
