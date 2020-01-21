import React from 'react';
import { graphql } from 'gatsby';

require(`katex/dist/katex.min.css`)
require("../styles/prism-base16-ateliersulphurpool.light.css")

const Template = ({data}) => {
  const {markdownRemark} = data
  const html = markdownRemark.html
  
  return (
    <section>
      <div className="container">
        <div className="columns">
          <div className="column" />
          <div className="column is-half" style={{padding: "2rem"}}>
            <br />
            <a href="/"><span class="tag is-link is-light is-small">CIS 192: Python Programming</span></a>
            <div className="generated">
              <div style={{marginTop: "1rem"}} dangerouslySetInnerHTML={{__html: html}}/>
            </div>
            <hr style={{marginTop: "2.5rem"}}/>
            <div className="level">
              <p className="is-size-7" style={{marginBottom: "0.5rem"}}>And that's all, folks! <br /> <br /> These notes were written by Arun Kirubarajan. All rights reserved. </p>
              <a href="/lectures"><span class="tag is-link is-light is-medium">All Material</span></a>
            </div>
          </div>
          <div className="column" />
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  query($pathSlug: String!) {
    markdownRemark(frontmatter: { path: {eq: $pathSlug }}) {
      rawMarkdownBody
      html
    }
  }
`

export default Template;