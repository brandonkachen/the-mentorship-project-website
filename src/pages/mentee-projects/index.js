import React from "react"
import ProjectsComp from "./projects"

const MenteeProjectsPage = () => (
  <>
    <div className="tile is-ancestor">
      <div className="tile is-parent">
        <article
          className="tile is-child box"
          style={{ border: "2px solid mediumslateblue" }}
        >
          <ProjectsComp />
        </article>
      </div>
    </div>
  </>
)

export default MenteeProjectsPage
