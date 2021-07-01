import { graphql } from "gatsby"
import ProjectsComponent from "@lekoarts/gatsby-theme-jodie-core/src/components/projects"

export default ProjectsComponent

export const query = graphql`
  query {
    projects: allProject(sort: { fields: date, order: DESC }) {
      nodes {
        subtitle
        shortTitle
        price
        capacity
        slug
        cover {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1200) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
