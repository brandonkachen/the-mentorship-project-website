import React from "react"
import PropTypes from "prop-types"
import logo from "../images/logo.png"

const Header = ({ tabs }) => (
  <header
    style={{
      margin: `0 auto`,
      maxWidth: 1300,
      padding: `1.45rem 1.0875rem`,
    }}
  >
    <section class="hero is-small">
      <div class="hero-body">
        <div class="container has-text-centered">
          <img
            class="gray-border"
            src={logo}
            alt="The Mentorship Project"
            style={{ height: 150 }}
          />

          {/* <h1 class="title">The Mentorship Project</h1> */}
          {/* <h2 class="subtitle">Creating lasting connections</h2> */}
        </div>
      </div>
      {tabs}
    </section>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
