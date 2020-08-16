import React from "react"

const Footer = () => {
  return (
    <>
      <section class="section" />
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <div class="tile is-child" />
          <article
            class="tile is-6 is-child box"
            style={{ border: "3px solid #cfd8dc" }}
          >
            <h1 class="title">Let's get in touch</h1>
            <p class="subtitle">
              If you'd like to learn more, please sign up for updates.
            </p>
            <form
              method="post"
              netlify-honeypot="bot-field"
              data-netlify="true"
              name="sign-up"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="sign-up" />
              <div class="content has-text-centered">
                <div class="field is-grouped is-grouped-centered">
                  <div class="field">
                    <label class="label">Name</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="e.g Alex Smith"
                        name="name"
                      />
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Email</label>
                    <div class="control">
                      <input
                        class="input"
                        type="email"
                        placeholder="e.g. alexsmith@gmail.com"
                        name="email"
                      />
                    </div>
                  </div>
                </div>

                <p>I want to be a:</p>

                <div class="control">
                  <label class="radio">
                    <input
                      type="radio"
                      name="Mentorship Selection"
                      value="mentor"
                    />
                    mentor
                  </label>
                  <label class="radio">
                    <input
                      type="radio"
                      name="Mentorship Selection"
                      value="mentee"
                    />
                    mentee
                  </label>
                </div>
                <button class="button is-primary" type="submit">
                  Send
                </button>
              </div>
            </form>
          </article>
          <div class="tile is-child" />
        </div>
      </div>
    </>
  )
}

export default Footer
