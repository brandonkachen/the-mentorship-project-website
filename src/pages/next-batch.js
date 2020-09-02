import React from "react"
import PaginationComp from "../components/pagination"

const FAQPage = () => {
  const pages = [
    <div className="is-faq-page">
      <p className="subtitle">Q: How will you measure our progress?</p>
      <p>
        We'll be gathering feedback through surveys and one-on-one meetings
        throughout the program. Because you're only competing with yourself,
        only you truly know how much you're progressing in comparison to how
        much you want to.
      </p>
    </div>,
    <div className="is-faq-page">
      <p className="subtitle">
        Q: Can we change projects partway through the program?
      </p>
      <p>
        Yes! If a mentee is finding that they're losing interest in the project,
        they can change it. However, both the mentor and mentee should make sure
        they aren't just hitting a temporary roadblock.
      </p>
    </div>,
    <div className="is-faq-page">
      <p className="subtitle">
        Q: [Mentor] I don't know what to teach. Can I still participate in the
        program?
      </p>
      <p>
        Not to worry, this program isn't tied to any specific field. That said,
        you must teach a specific field that mentees can pursue. Please{" "}
        <a href="mailto: hello@thementorshipproject.us">send us an email</a>,
        we're happy to help you figure it out.
      </p>
    </div>,
    <div className="is-faq-page">
      <p className="subtitle">
        Q: What if I have a falling out with my mentor/mentee?
      </p>
      <p>
        Please privately contact your coordinator Brandon and we'll work to
        resolve the issue. If the problem cannot be resolved, we'll work with
        you to find another mentor/mentee. We have had good mentor-mentee
        pairings so far, so this isn't a likely scenario.
      </p>
    </div>,
  ]

  return <PaginationComp title="FAQ" pages={pages} />
}

const NextBatchPage = () => (
  <>
    <div className="tile is-ancestor">
      <div className="tile is-8 is-parent">
        <article
          className="tile is-child content box"
          style={{ border: "2px solid mediumslateblue" }}
        >
          <p className="title">Mentor Expectations</p>
          <ul>
            <li>
              Meet (virtually) with your mentee for <b>1-2 hours per week</b>{" "}
              for 10 consecutive weeks. You'll decide your specific meeting
              times with your mentee.{" "}
              <span role="img" aria-label="telephone receiver">
                📞
              </span>
            </li>
            <li>
              Meet (virtually) with others in your batch for{" "}
              <b>1 hour every 3 or 4 weeks</b>.{" "}
              <span role="img" aria-label="smiling face">
                😊
              </span>
            </li>

            {/* <li>Become certified with the San Mateo Unified School District to be a volunteer.</li> */}

            <li>
              Love teaching and guiding.{" "}
              <span role="img" aria-label="teacher">
                🧑‍🏫
              </span>
            </li>

            <li>
              Empathize with and respect high school students.{" "}
              <span role="img" aria-label="100">
                💯
              </span>
            </li>
            <li>
              Actively listen to others in the program.{" "}
              <span role="img" aria-label="ear">
                👂
              </span>
            </li>
            <li>
              Find solutions and opportunities for your mentee.{" "}
              <span role="img" aria-label="key">
                🔑
              </span>
            </li>
          </ul>
        </article>
      </div>
      <div className="tile is-parent">
        <article
          className="tile is-child box"
          style={{ border: "2px solid gold" }}
        >
          <p className="title">Timeline</p>
          <p className="subtitle">
            All times are tentative and subject to change
          </p>
          <div className="content">
            <p>Mentor volunteer clearances begin &mdash; 9/13</p>
            <p>Mentee applications begin &mdash; 9/20</p>
            <p>Mentee interviews begin &mdash; 9/27</p>
            <p>Mentee decisions &mdash; Week of 10/4</p>
            <p>Program start &mdash; Week of 10/11</p>
            <p>Program end &mdash; Week of 12/13</p>
          </div>
        </article>
      </div>
    </div>
    <div className="tile is-ancestor">
      <div className="tile is-8 is-parent">
        <article
          className="tile is-child content box"
          style={{ border: "2px solid turquoise" }}
        >
          <p className="title">Mentee Expectations</p>
          <ul>
            <li>
              Meet (virtually) with your mentor for <b>1-2 hours per week</b>{" "}
              for 10 consecutive weeks. You'll decide your specific meeting
              times with your mentor.{" "}
              <span role="img" aria-label="telephone receiver">
                📞
              </span>
            </li>

            <li>
              Meet (virtually) with others your batch for{" "}
              <b>1 hour every 2 weeks</b>.{" "}
              <span role="img" aria-label="smiling face">
                😊
              </span>
            </li>

            <li>
              Dedicate <b>3-6 hours per week</b> for 10 consecutive weeks to
              work on your projects.{" "}
              <span role="img" aria-label="hourglass with flowing sand">
                ⏳
              </span>
            </li>

            <li>
              Learn quickly and be self-directed.{" "}
              <span role="img" aria-label="books">
                📚
              </span>
            </li>

            <li>
              Be curious and eager to keep asking questions.{" "}
              <span role="img" aria-label="compass">
                🧭
              </span>
            </li>

            <li>
              Work hard.{" "}
              <span role="img" aria-label="tools">
                🛠
              </span>
            </li>

            <li>
              {" "}
              Love continually iterating on ideas.{" "}
              <span role="img" aria-label="repeat">
                🔁
              </span>
            </li>
          </ul>
        </article>
      </div>
      <div className="tile is-parent">
        <article
          className="tile is-child box"
          style={{ border: "2px solid mediumslateblue" }}
        >
          <FAQPage />
        </article>
      </div>
    </div>
  </>
)

export default NextBatchPage
