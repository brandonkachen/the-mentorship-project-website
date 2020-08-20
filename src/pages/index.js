import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutUsPage from "./about-us"
import PastWorkPage from "./past-work"
import MenteeProjectsPage from "./mentee-projects/index"
import NextBatchPage from "./next-batch"
import TestimonialsPage from "./testimonials"

const tabObjs = {
  "About Us": <AboutUsPage />,
  "Past Work": <PastWorkPage />,
  // Testimonials: <TestimonialsPage />,
  // "Mentee Projects": <MenteeProjectsPage />,
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
      <div class="tabs is-centered has-text-weight-bold">
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
