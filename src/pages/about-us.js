import React from "react"
import PhilosophyPage from "./philosophy"
import ValuePage from "./value"

const AboutUsPage = () => {
  return (
    <>
      <div className="tile is-ancestor">
        <div className="tile is-5 is-vertical is-parent">
          <div
            className="tile is-child box"
            style={{ border: "2px solid mediumslateblue" }}
          >
            <p className="title">What is this program?</p>
            <p>
              <b>The Mentorship Project</b> (TMP) is a one-on-one project-based
              volunteer mentorship program that connects high school students
              (mentees) and industry professionals (mentors).{" "}
              <span role="img" aria-label="light-bulb">
                💡
              </span>
            </p>
            <p>
              TMP operates completely virtually and in 10 week batches.{" "}
              <span role="img" aria-label="ten">
                🔟
              </span>
            </p>
          </div>
          <div
            className="tile is-child box"
            style={{ border: "2px solid turquoise" }}
          >
            <PhilosophyPage />
          </div>
        </div>
        <div className="tile is-vertical is-parent">
          <div
            className="tile is-child box"
            style={{ border: "2px solid gold" }}
          >
            <p className="title">How does it work?</p>
            <p className="subtitle">
              There are four distinct phases for each batch.
            </p>
            <div className="content is-vertical-center">
              <ol>
                <li>
                  <b>Connect</b>: Each mentee is paired with a mentor based on
                  interest and compatibility.{" "}
                  <span role="img" aria-label="waving hand">
                    👋
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
          </div>
        </div>
      </div>

      <div className="section" />

      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article
            className="tile is-child box content"
            style={{ border: "2px solid mediumslateblue" }}
          >
            <ValuePage />
          </article>
        </div>
      </div>
    </>
  )
}

export default AboutUsPage
