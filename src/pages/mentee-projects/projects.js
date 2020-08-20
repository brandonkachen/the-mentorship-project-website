import React from "react"
import PaginationComp from "../../components/pagination"
import GliderImg from "../../images/glider.png"
import GabiProject from "../../images/GabiProject.png"
import CarlyProjectWebpage from "../../images/CarlyProjectWebpage.png"

const rickProject = (
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <div class="tile is-child has-text-centered box">
        <img src={GliderImg} alt="Glider" style={{ maxHeight: 500 }} />
        <figcaption>
          A glider mod that can fly. Inspired from the film "Nausicaä of the
          Valley of the Wind"
        </figcaption>
      </div>
    </div>
    <div class="tile is-4 is-vertical is-parent">
      <div class="tile is-child box">
        <p class="title">Rick and Brandon</p>
        <p>
          Rick had recently taken AP Computer Science at his high school and
          wanted to apply his newfound skills to the game Minecraft. With the
          help of his mentor Brandon, Rick successfully created all the major
          types of Minecraft "mods", or modifications. See his{" "}
          <a
            href="https://docs.google.com/presentation/d/1rheR37CLtShKCorWbaud4zKbww7S9AVKB5NcpJPtMD0"
            target="_blank"
            rel="noreferrer"
          >
            final presentation
          </a>{" "}
          for more information.
        </p>
      </div>
      {/* <article class="message is-dark tile is-child box">
        <div class="message-body">
          <p>
            <q>
              ... since we have weekly meetings, I get a lot of practice to talk
              and explain my concerns to other people.
            </q>
          </p>
          <figcaption>&mdash; Rick, Freshman at UC Riverside</figcaption>
        </div>
      </article> */}
    </div>
  </div>
)

const carlyProject = (
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <div class="tile is-child has-text-centered box gray-border">
        <img
          src={CarlyProjectWebpage}
          alt="Carly's Project"
          style={{ maxHeight: 500 }}
        />
      </div>
    </div>
    <div class="tile is-4 is-vertical is-parent">
      <div class="tile is-child box">
        <p class="title">Carly and Bijun</p>
        <p>
          Carly was curious about design because she likes to draw and wanted to
          hone her storytelling skills. With her mentor Bijun's help, Carly
          successfully created a webtoon comic that guides readers through
          surviving the year 2020. See her{" "}
          <a
            href="https://www.webtoons.com/en/challenge/mentorship-project/_/viewer?title_no=492090&episode_no=1"
            target="_blank"
            rel="noreferrer"
          >
            final presentation
          </a>{" "}
          for more information.
        </p>
      </div>
      {/* <article class="message is-dark tile is-child box">
        <div class="message-body">
          <p>
            <q>
              I learned to talk to people in a more professional way and not
              feel very awkward like I did before.
            </q>
          </p>
          <figcaption>&mdash; Carly, Sophomore at Mills High School</figcaption>
        </div>
      </article> */}
    </div>
  </div>
)

const gabiProject = (
  <div class="tile is-ancestor">
    <div class="tile is-parent">
      <div class="tile is-child has-text-centered box">
        <img
          src={GabiProject}
          alt="Gabi's Project"
          style={{ maxHeight: 500 }}
        />
      </div>
    </div>
    <div class="tile is-4 is-vertical is-parent">
      <div class="tile is-child box">
        <p class="title">Gabi and Chris</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
          magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
          sem. Etiam finibus odio quis feugiat facilisis.
        </p>
      </div>
      <article class="message is-dark tile is-child box">
        <div class="message-body">
          <p>
            <q>
              I enjoyed meeting with my mentor every week because I knew I was
              going to end the call with new knowledge.
            </q>
          </p>
          <figcaption>&mdash; Gabi, Junior at Mills High School</figcaption>
        </div>
      </article>
    </div>
  </div>
)

const projectPages = [rickProject, carlyProject, gabiProject]

const ProjectsComp = () => (
  <PaginationComp title="Project Showcase" pages={projectPages} />
)

export default ProjectsComp
