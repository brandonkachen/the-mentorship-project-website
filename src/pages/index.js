import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import AboutUsPage from "./about-us"
import PastBatchPage from "./past-batch"
import NextBatchPage from "./next-batch"

const tabObjs = {
  "Past Batch": <PastBatchPage />,
  "About Us": <AboutUsPage />,
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
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  renderArticle = i => {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a onClick={() => this.changeSelectedTab(i)} aria-hidden="true">
        {i}
      </a>
    )
  }

  renderTabList = selectedTab => {
    return (
      <div className="tabs is-centered has-text-weight-bold">
        <ul>
          {Object.keys(tabObjs).map(i =>
            selectedTab === i ? (
              <li className="is-active">{this.renderArticle(i)}</li>
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
