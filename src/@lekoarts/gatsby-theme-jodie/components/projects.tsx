/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { PageProps } from "gatsby"
import Img from "gatsby-image"
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout"
import { ChildImageSharp } from "@lekoarts/gatsby-theme-jodie/src/types"
import SEO from "@lekoarts/gatsby-theme-jodie/src/components/seo"
import GridItem from "./grid-item"
import locales from "@lekoarts/gatsby-theme-jodie/src/locales"
import { visuallyHidden } from "@lekoarts/gatsby-theme-jodie/src/styles/utils"
import "../../../components/style.css"

type DataProps = {
    projects: {
        nodes: {
            shortTitle: string
            slug: string
            cover: ChildImageSharp
        }[]
    }
}

const Project: React.FC<PageProps<DataProps>> = ({ data: { projects }, location }) => (
    <Layout>
        <SEO title="Projects" pathname={location.pathname} />
        <h1 sx={visuallyHidden} data-testid="page-title">
            {locales.projects}
        </h1>
        <h1>Liqueures</h1>
        <div
            sx={{
                display: `grid`,
                gridTemplateColumns: [`1fr`, `1fr 1fr`],
                gridAutoRows: `50vw`,
            }}
        >
            {projects.nodes.length > 0 ? (
                projects.nodes.map((project) => (
                    <GridItem to={project.slug} key={project.slug} data-testid={project.shortTitle}>
                        <div className="grid-image">
                            <Img fluid={project.cover.childImageSharp.fluid} />
                        </div>
                        <div className="grid-text">
                            <h3 className="titre-bse">{project.shortTitle}</h3>
                            <h4 className="sous-titre-bse">sous-titre</h4>
                            <h4 className="contenance-bse">contenance</h4>
                            <h3 className="prix-bse">prix</h3>
                        </div>
                    </GridItem>
                ))
            ) : (
                <div sx={{ padding: 3 }}>No projects found at the location defined for "projectsPath"</div>
            )}
        </div>
    </Layout>
)

export default Project
