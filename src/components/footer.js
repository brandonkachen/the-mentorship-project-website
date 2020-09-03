import React from "react"

const Footer = ({ tabs }) => {
  return (
    <>
      <section className="section" />
      <section className="hero is-small">
        <div className="hero-body">{tabs}</div>
      </section>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <div className="tile is-child" />
          <article
            className="tile is-6 is-child box"
            style={{ border: "2px solid #cfd8dc" }}
          >
            <h1 className="title">Let's get in touch</h1>
            <p className="subtitle">
              If you have any specific questions, please send us{" "}
              <a href="mailto: hello@thementorshipproject.us">an email</a>.
              Otherwise, please sign up for updates!
            </p>
            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="sign-up"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="sign-up" />
              <div className="content has-text-centered">
                <div className="field is-grouped is-grouped-centered">
                  <div className="field">
                    <div className="label">Name</div>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="e.g Alex Smith"
                        name="name"
                      />
                    </div>
                  </div>

                  <div className="field">
                    <div className="label">Email</div>
                    <div className="control">
                      <input
                        className="input"
                        type="email"
                        placeholder="e.g. alexsmith@gmail.com"
                        name="email"
                      />
                    </div>
                  </div>
                </div>

                <p>I want to be a:</p>

                <div className="control">
                  <label className="radio">
                    <input
                      type="radio"
                      name="Mentorship Selection"
                      value="mentor"
                    />
                    mentor
                  </label>
                  <label className="radio">
                    <input
                      type="radio"
                      name="Mentorship Selection"
                      value="mentee"
                    />
                    mentee
                  </label>
                </div>
                <button className="button is-primary" type="submit">
                  Send
                </button>
              </div>
            </form>
          </article>
          <div className="tile is-child" />
        </div>
      </div>
    </>
  )
}

export default Footer
