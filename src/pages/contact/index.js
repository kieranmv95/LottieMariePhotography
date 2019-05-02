import React from "react"
import Layout from "../../components/Layout"
import SEO from "../../components/Seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact" keywords={[`Contact`]} />
    <h1>Contact</h1>

    <form
      name="contact"
      method="POST"
      netlify-honeypot="bot-field"
      data-netlify="true"
    >
      <label style={{'display': 'none'}}>Don’t fill this out if you're human: <input name="bot-field" /></label>
      <div>
        <label>Your Name:</label>
        <input type="text" name="name" />
      </div>
      <div>
        <label>Your Email:</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Your Role:</label>
        <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select>
      </div>

      <div>
        <label>Message:</label>
        <textarea name="message"></textarea>
      </div>

      <button type="submit">Send</button>
    </form>

  </Layout>
)

export default IndexPage
