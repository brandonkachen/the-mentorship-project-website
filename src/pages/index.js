import React, { Component } from "react"

import Layout from "../components/layout"
import logo from "../images/logo.png"
import SEO from "../components/seo"
import { Link } from "gatsby"
import AboutUsPage from "./about-us"
import MenteeProjectsPage from "./mentee-projects"
import PhilosophyPage from "./philosophy"

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: "About Us",
    }
  }

  changeSelectedTab = newlySelectedTab => {
    this.setState({
      selectedTab: newlySelectedTab,
    })
  }

  tabs = () => {
    const selectedTab = this.state.selectedTab
    const tabList = ["About Us", "Mentee Projects", "Philosophy"]

    return tabList.map(item =>
      selectedTab === item ? (
        <li class="is-active">
          <a onClick={() => this.changeSelectedTab(item)}>{item}</a>
        </li>
      ) : (
        <li>
          <a onClick={() => this.changeSelectedTab(item)}>{item}</a>
        </li>
      )
    )
  }

  nav = () => {
    return (
      <section class="hero is-small has-text-centered">
        <div class="hero-body">
          <div class="container">
            <img
              class="rounded"
              src={logo}
              alt="The Mentorship Project"
              style={{ height: 150 }}
            />

            <h1 class="title">The Mentorship Project</h1>
            {/* <h2 class="subtitle">Creating long-lasting connections</h2> */}
          </div>
        </div>
        <div class="tabs is-centered">
          <ul>{this.tabs()}</ul>
        </div>
      </section>
    )
  }

  renderPage = selectedTab => {
    switch (selectedTab) {
      case "About Us":
        return <AboutUsPage />
      case "Mentee Projects":
        return <MenteeProjectsPage />
      case "Philosophy":
        return <PhilosophyPage />
    }
  }

  render() {
    const selectedTab = this.state.selectedTab

    return (
      <Layout>
        <SEO title="Home" />

        {this.nav()}

        {this.renderPage(selectedTab)}
      </Layout>
    )
  }
}
export default IndexPage
