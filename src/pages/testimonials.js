import React from "react"
import PaginationComp from "../components/pagination"

const QuotesComp = () => {
  const pages = [
    <div className="tile is-ancestor">
      <div className="tile is-vertical is-parent">
        <article className="message is-dark tile is-child box">
          <div className="message-body is-link">
            <p>
              <q>
                I learned to talk to people in a more professional way and not
                feel very awkward like I did before.
              </q>
            </p>
            <figcaption>
              &mdash; Carly, Sophomore at Mills High School (Mentee)
            </figcaption>
          </div>
        </article>
        <article className="message is-dark tile is-child box">
          <div className="message-body is-primary">
            <p>
              <q>
                It's a very rewarding experience to be able to see the amount of
                creativity and energy from the mentees and to be able to watch
                them grow through the course of their project!
              </q>
            </p>
            <figcaption>&mdash; Bijun, Designer at Reddit (Mentor)</figcaption>
          </div>
        </article>
      </div>
    </div>,
    <div className="tile is-ancestor">
      <div className="tile is-vertical is-parent">
        <article className="message is-dark tile is-child box">
          <div className="message-body">
            <p>
              <q>
                I enjoyed meeting with my mentor every week because I knew I was
                going to end the call with new knowledge.
              </q>
            </p>
            <figcaption>
              &mdash; Gabi, Junior at Mills High School (Mentee)
            </figcaption>
          </div>
        </article>
        <article className="message is-dark tile is-child box">
          <div className="message-body">
            <p>
              <q>
                There is so much joy experienced seeing the growth from your
                mentee in such a short period of time that you don't realize
                that you're growing yourself. Can't recommend the program
                enough!
              </q>
            </p>
            <figcaption>
              &mdash; Chris, Business Operations Coordinator at Facebook
              (Mentor)
            </figcaption>
          </div>
        </article>
      </div>
    </div>,
    <div className="tile is-ancestor">
      <div className="tile is-vertical is-parent">
        <article className="message is-dark tile is-child box">
          <div className="message-body">
            <p>
              <q>
                ... since we have weekly meetings, I get a lot of practice to
                talk and explain my concerns to other people.
              </q>
            </p>
            <figcaption>
              &mdash; Rick, Freshman at UC Riverside (Mentee)
            </figcaption>
          </div>
        </article>
        <article className="message is-dark tile is-child box">
          <div className="message-body">
            <p>
              <q>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </q>
            </p>
            <figcaption>
              &mdash; Brandon, Software Developer at Kuna Systems
            </figcaption>
          </div>
        </article>
      </div>
    </div>,
  ]

  return <PaginationComp title="What Our Alumni Say About TMP" pages={pages} />
}

const TestimonialsPage = () => (
  <div className="tile is-ancestor">
    <div className="tile is-7 is-parent">
      <article
        className="tile is-child box content"
        style={{ border: "2px solid turquoise" }}
      >
        <h1 className="title">Some Stats</h1>
        <div className="tile is-ancestor">
          <div className="tile is-1 is-parent" />
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="subtitle">
                Number of <b>Mentees</b>
              </p>
              <p>3</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="subtitle">
                Number of <b>Mentors</b>
              </p>
              <p>3</p>
            </article>
          </div>
          <div className="tile is-1 is-parent" />
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-1 is-parent" />

          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="subtitle">Overall satisfaction rate</p>
              <p>100%</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="subtitle">
                Enjoyment working with other mentees and mentors
              </p>
              <p>5/5</p>
            </article>
          </div>
          <div className="tile is-1 is-parent" />
        </div>
        <div className="tile is-ancestor">
          <div className="tile is-1 is-parent" />
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="subtitle">
                % of mentees who felt TMP helped improve their{" "}
                <b>communication skills. </b>
              </p>
              <p>100%</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="subtitle">
                % of mentees who felt TMP taught them new{" "}
                <b>technical skills. </b>
              </p>
              <p>100%</p>
            </article>
          </div>
          <div className="tile is-1 is-parent" />
        </div>
      </article>
    </div>
    <div className="tile is-parent">
      <article
        className="tile is-child box content"
        style={{ border: "2px solid gold" }}
      >
        <QuotesComp />
      </article>
    </div>
  </div>
)

export default TestimonialsPage
