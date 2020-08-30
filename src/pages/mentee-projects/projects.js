import React from "react"
import PaginationComp from "../../components/pagination"
import GliderImg from "../../images/glider.png"
import GabiProjectImg from "../../images/GabiProject.png"
import CarlyProjectWebpage from "../../images/CarlyProjectWebpage.png"

const RickProject = (
  <div className="tile is-ancestor">
    <div className="tile is-parent">
      <div className="tile is-child has-text-centered box">
        {/* <img src={GliderImg} alt="Glider" style={{ maxHeight: 500 }} />
        <figcaption>
          A glider mod that can fly. Inspired from the film "Nausicaä of the
          Valley of the Wind"
        </figcaption> */}

        <video controls>
          <source
            src="https://s3-website-bucket-04eeef3.s3.amazonaws.com/rick-mc-mod-montage.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <figcaption>
          Minecraft modifications ("mods") that Rick made as he learned how to
          develop for the game. <br></br> Each item shown is a custom developed
          mod.
        </figcaption>
      </div>
    </div>
    <div className="tile is-4 is-vertical is-parent">
      <div className="tile is-child box">
        <p className="title">Rick and Brandon</p>
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
    </div>
  </div>
)

const CarlyProject = (
  <div className="tile is-ancestor">
    <div className="tile is-parent">
      <div className="tile is-child has-text-centered box">
        <img
          src={CarlyProjectWebpage}
          alt="Carly's Project"
          style={{ maxHeight: 500 }}
        />

        <figcaption>
          A guide to the year 2020, written by Carly in 2020 for Carly in 2019.
        </figcaption>
      </div>
    </div>
    <div className="tile is-4 is-vertical is-parent">
      <div className="tile is-child box">
        <p className="title">Carly and Bijun</p>
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
    </div>
  </div>
)

const GabiProject = (
  <div className="tile is-ancestor">
    <div className="tile is-parent">
      <div className="tile is-child has-text-centered box">
        <img
          src={GabiProjectImg}
          alt="Gabi's Project"
          style={{ maxHeight: 500 }}
        />
        <figcaption>
          A business proposal for a student afterschool tutoring program.
        </figcaption>
      </div>
    </div>
    <div className="tile is-4 is-vertical is-parent">
      <div className="tile is-child box">
        <p className="title">Gabi and Chris</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare
          magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa
          sem. Etiam finibus odio quis feugiat facilisis.
        </p>
      </div>
    </div>
  </div>
)

const ProjectsComp = () => (
  <PaginationComp
    title="Project Showcase"
    pages={[RickProject, CarlyProject, GabiProject]}
  />
)

export default ProjectsComp
