import React from "react"

const AboutUsPage = () => (
  <>
    <div class="tile is-ancestor">
      <div class="tile is-5 is-vertical is-parent">
        <div
          class="tile is-child box"
          style={{ border: "4px solid mediumslateblue" }}
        >
          <p class="title">
            What is this program?
            {/* <span role="img" aria-label="light-bulb">
              💡
            </span> */}
          </p>
          <p>
            <b>The Mentorship Project</b> (TMP) is a one-on-one project-based
            mentorship program that connects high school students and industry
            professionals. All participants are volunteers and do not receive or
            provide compensation.
          </p>
          <p>
            TMP operates in batches that each last approximately 10 weeks long.
            All activities are performed virtually.
          </p>
        </div>
        <div
          class="tile is-child box"
          style={{ border: "4px solid turquoise" }}
        >
          <p class="title">Who do you serve?</p>
          <div class="content">
            <p>
              <b>Mentees</b> are high schoolers who are self-driven and are
              interested in building projects.
            </p>
            <p>
              {" "}
              <b>Mentors</b> are industry professionals who have strong
              expertise in a particular field and want to guide mentees through
              their projects.
            </p>
          </div>
        </div>
      </div>
      {/* <div class="tile is-1 is-vertical is-parent" /> */}
      <div class="tile is-vertical is-parent">
        <div class="tile is-child box" style={{ border: "4px solid gold" }}>
          <p class="title">How does it work?</p>
          <p class="subtitle">There are four distinct phases for each batch.</p>
          {/* <div class="content is-vertical-center">  */}
          <div class="content">
            <ol>
              <li>
                <b>Connect</b>: Each mentee be paired with a mentor based on
                interest and compatibility. 🔗{" "}
              </li>
              <li>
                <b>Brainstorm</b>: Together, each pair will come up with a
                project idea that will take 8 weeks to build. 📆
              </li>{" "}
              <li>
                <b>Build</b>: Mentees build out their projects with guidance,
                support, and accountability from their mentors. 🚀
                <ul>
                  <li>
                    Each pair meets (virtually) once a week to discuss the
                    mentee's project and progress. 🤝
                  </li>
                  <li>
                    Mentors will help their mentees get up to speed on their
                    fields of expertise. 📖
                  </li>
                  <li>
                    Mentees work on their own projects for 3-6 hours per week
                    between check-ins. 📝
                  </li>{" "}
                  <li>
                    Each mentee also share their progress to their fellow
                    students every other week. 💬
                  </li>
                </ul>
              </li>{" "}
              <li>
                <b>Present</b>: At the end of the program, mentees will present
                their work to our entire group and invited guests. 🎉
              </li>
            </ol>
          </div>
          {/* <div class="has-text-centered">
            <button class="button is-primary is-light is-pulled-right">
              See Past Projects
            </button>
          </div> */}
        </div>
        {/* <div
          class="tile is-child box"
          style={{ border: "4px solid mediumslateblue" }}
        >
          <p class="title">What value do you provide?</p>
          <div class="content">
            <p>
              Mentees learn about their mentors’ fields of expertise through
              projects they create from scratch. Mentors guide their mentees
              throughout by providing advice and accountability, pushing them to
              tackle difficult problems, and watching for pitfalls along the
              way.
            </p>
          </div>
        </div> */}
      </div>
    </div>

    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <div
          class="tile is-child box content"
          style={{ border: "4px solid mediumslateblue" }}
        >
          <h1 class="title">Value to Mentees</h1>
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
              Improve your communication skills by teaching someone else about a
              topic you are knowledgeable about.
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

export default AboutUsPage
