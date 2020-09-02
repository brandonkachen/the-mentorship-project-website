import React from "react"
import PaginationComp from "../../components/pagination"
import GabiProjectImg from "../../images/GabiProject.png"
import CarlyProjectWebpage from "../../images/CarlyProject.png"

const RickProject = (
  <div className="tile is-ancestor">
    <div className="tile is-parent">
      <div className="tile is-child has-text-centered box is-showcase-page">
        <iframe
          title="Rick Mod Showcase"
          width="100%"
          height="85%"
          src="https://www.youtube.com/embed/CIlrNn9ystY"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
        <figcaption>
          Minecraft game elements custom-developed by Rick.
        </figcaption>
      </div>
    </div>
    <div className="tile is-4 is-vertical is-parent">
      <div className="tile is-child box">
        <p className="title">Rick and Brandon</p>
        <p>
          Rick had recently taken AP Computer Science at his high school and
          wanted to apply his new skills to the game Minecraft. With the help of
          his mentor Brandon, Rick successfully created all the major types of
          Minecraft "mods", or modifications.
        </p>
        <p>
          In the process, he took a peek underneath the hood of how Minecraft
          works and what developers can do to further build upon the game. See
          his{" "}
          <a
            href="https://docs.google.com/presentation/d/1rheR37CLtShKCorWbaud4zKbww7S9AVKB5NcpJPtMD0"
            target="_blank"
            rel="noreferrer"
          >
            final presentation
          </a>{" "}
          for more detail.
        </p>
      </div>
    </div>
  </div>
)

const CarlyProject = (
  <div className="tile is-ancestor">
    <div className="tile is-parent">
      <div className="tile is-child has-text-centered box is-showcase-page">
        <img src={CarlyProjectWebpage} alt="Carly's Project" />

        <figcaption>
          A webtoon comic guide to the year 2020, drawn by Carly in 2020 for
          Carly in 2019.
        </figcaption>
      </div>
    </div>
    <div className="tile is-4 is-vertical is-parent">
      <div className="tile is-child box">
        <p className="title">Carly and Bijun</p>
        <p>
          Carly was curious about design because she liked drawing and wanted to
          hone her storytelling skills. Under her mentor Bijun's guidance, Carly
          was able to unleash her creativity while staying focused and on top of
          the work.
        </p>
        <p>
          Carly created a webtoon comic that guides readers on how to survive
          the year 2020. Her work involved drawing 3 episodes, designing her own
          font (used throughout the webtoon), and creating two central
          characters. Click{" "}
          <a
            href="https://www.webtoons.com/en/challenge/mentorship-project/_/viewer?title_no=492090&episode_no=1"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>{" "}
          for her final presentation.
        </p>
      </div>
    </div>
  </div>
)

const GabiProject = (
  <div className="tile is-ancestor">
    <div className="tile is-parent">
      <div className="tile is-child has-text-centered box is-showcase-page">
        <img src={GabiProjectImg} alt="Gabi's Project" />
        <figcaption>
          A business proposal for a student afterschool tutoring program created
          by Gabi.
        </figcaption>
      </div>
    </div>
    <div className="tile is-4 is-vertical is-parent">
      <div className="tile is-child box">
        <p className="title">Gabi and Chris</p>
        <p>
          Gabi wanted to learn more about business but had never taken a class
          or started one herself. Her mentor Chris helped her learn core
          business concepts, like target audiences and cost modeling on
          spreadsheets.
        </p>
        <p>
          She applied her new skills to create a business proposal for a student
          afterschool program. Her proposal is designed to pitch investors on
          her idea to help fund and kickstart the program. Click{" "}
          <a
            href="https://prezi.com/view/ToGJ1cVIUThbAua4mbq6/"
            target="_blank"
            rel="noreferrer"
          >
            here
          </a>{" "}
          to see it.
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
