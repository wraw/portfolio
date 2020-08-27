import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="About" keywords={[`władek`, `rawiński`, `about`, `portfolio`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <figure className="kg-card kg-image-card">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
          </figure>
          <h3 id="dynamic-styles">About</h3>
          <p>
          Władek Rawiński is a Digital Designer with experience in Graphic Design and communication.
          Seeks an opportunity to progress in UX/UI design and art direction.
          Władek got his education in three countries Poland, the UK, and Portugal.
          His ability to adapt to new environments and amazing Pizza skills could make him a valuable co-worker.
          Władek is currently based in Pomerania, Poland.
          </p>
        </div>
        <br />
        <br />
          <h5 id="forms">Stay in touch!</h5>
          <form
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field">
            <div className="row gtr-uniform">
              <div className="col-6 col-12-xsmall">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="E-mail"
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                />
              </div>
              {/* Break */}
              <div className="col-12">
                <select name="demo-category" id="category">
                  <option value>- Category -</option>
                  <option value={1}>Design inquiry</option>
                  <option value={1}>Photo/Video</option>
                  <option value={1}>General</option>
                </select>
              </div>
              {/* Break */}
              <div className="col-12">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  rows={6}
                  defaultValue={""}
                />
              </div>
              {/* Break */}
              <div className="col-6 col-12-small">
                <input
                  type="checkbox"
                  id="human"
                  name="human"
                />
                <label htmlFor="human">I am a human</label>
                <br/>
              </div>
              {/* Break */}
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      defaultValue="Send Message"
                      className="primary"
                    />
                  </li>
                  <li>
                    <input type="reset" defaultValue="Reset" />
                  </li>
                </ul>
              </div>
            </div>
          </form>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
