import React from "react"
import PropTypes from "prop-types"
import logo from "../images/logo.png"

const Header = ({ tabs }) => (
  <>
    <div class="notification is-primary">
      <a href="winter-2020" rel="noreferrer">
        <div className="container has-text-centered">
          <b>
            Applications for Winter 2020 are live! Click here learn more and
            apply.
          </b>
        </div>
      </a>
    </div>
    <header
      style={{
        margin: `0 auto`,
        maxWidth: 1300,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <section className="hero is-small">
        <div className="hero-body">
          <div className="container has-text-centered">
            <a href="/">
              <img
                className="gray-border"
                src={logo}
                alt="The Mentorship Project"
                style={{ height: 150 }}
              />
            </a>
          </div>
        </div>
        {tabs}
      </section>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
