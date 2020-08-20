import React from "react"
import PaginationComp from "../components/pagination"

const QuotesComp = () => {
  const pages = [
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent">
        <article class="message is-dark tile is-child box">
          <div class="message-body is-link">
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
        <article class="message is-dark tile is-child box">
          <div class="message-body is-primary">
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
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent">
        <article class="message is-dark tile is-child box">
          <div class="message-body">
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
        <article class="message is-dark tile is-child box">
          <div class="message-body">
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
    <div class="tile is-ancestor">
      <div class="tile is-vertical is-parent">
        <article class="message is-dark tile is-child box">
          <div class="message-body">
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
        <article class="message is-dark tile is-child box">
          <div class="message-body">
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

  return <PaginationComp title="What our alumni say about TMP" pages={pages} />
}

// export default QuotesComp

const TestimonialsPage = () => (
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <article
        class="tile is-child box content"
        style={{ border: "3px solid turquoise" }}
      >
        <QuotesComp />
      </article>
    </div>
    <div class="tile is-parent is-vertical">
      <div
        class="tile is-child box content"
        style={{ border: "3px solid mediumslateblue" }}
      >
        <h1 class="title">Value to Mentees</h1>
        <ul>
          <li>
            Learn more about a new field they may wish to build a career in
          </li>
          <li>Grow their portfolios and resumes</li>
          <li>
            Expand their networks through the other mentors and mentees they
            meet.
          </li>
        </ul>
      </div>
      <article
        class="tile is-child box content"
        style={{ border: "3px solid turquoise" }}
      >
        <h1 class="title">Value to Mentors</h1>
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
            Expand your network through the other mentors and mentees you meet.
          </li>
        </ul>
      </article>
    </div>
  </div>
)

export default TestimonialsPage
