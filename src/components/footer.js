import React from "react"

const Footer = () => {
  return (
    <div class="tile is-ancestor">
      <div class="tile is-parent">
        <article
          class="tile is-child box"
          style={{ border: "4px solid #cfd8dc" }}
        >
          <h1 class="title">Let's get in touch</h1>
          <p class="subtitle">
            If you'd like to learn more, please sign up for updates. No spam,
            promise!
          </p>
          <form
            method="post"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div class="field">
              <label class="label">Name</label>
              <div class="control">
                <input class="input" type="text" placeholder="e.g Alex Smith" />
              </div>
            </div>

            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input
                  class="input"
                  type="email"
                  placeholder="e.g. alexsmith@gmail.com"
                />
              </div>
            </div>
            <button class="button is-primary" type="submit">
              Send
            </button>
          </form>
        </article>
      </div>
    </div>
  )
}

export default Footer
