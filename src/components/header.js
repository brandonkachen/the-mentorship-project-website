import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import logo from "../images/logo.png"

const Header = ({ tabs }) => (
  <>
    {tabs ? (
      <div class="notification is-primary">
        <div className="container has-text-centered">
          Applications for Fall 2020 are live!<br></br>
          <Link to="fall-2020" rel="noreferrer" target="_blank">
            <b>Learn more and apply here.</b>
          </Link>
        </div>
      </div>
    ) : null}
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
