import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutUsPage from "./about-us"
import MenteeProjectsPage from "./mentee-projects"
import PhilosophyPage from "./philosophy"
import NextBatchPage from "./next-batch"

const tabObjs = {
  "About Us": <AboutUsPage />,
  "Mentee Projects": <MenteeProjectsPage />,
  Philosophy: <PhilosophyPage />,
  "Next Batch": <NextBatchPage />,
}

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: Object.keys(tabObjs)[0],
    }
  }

  changeSelectedTab = newlySelectedTab => {
    this.setState({
      selectedTab: newlySelectedTab,
    })
  }

  renderArticle = i => {
    return <a onClick={() => this.changeSelectedTab(i)}>{i}</a>
  }

  renderTabList = selectedTab => {
    return (
      <div class="tabs is-centered">
        <ul>
          {Object.keys(tabObjs).map(i =>
            selectedTab === i ? (
              <li class="is-active">{this.renderArticle(i)}</li>
            ) : (
              <li>{this.renderArticle(i)}</li>
            )
          )}
        </ul>
      </div>
    )
  }

  render() {
    const selectedTab = this.state.selectedTab
    const page = tabObjs[selectedTab]

    return (
      <Layout tabs={this.renderTabList(selectedTab)}>
        <SEO title="Home" />
        {page}
      </Layout>
    )
  }
}
export default IndexPage
