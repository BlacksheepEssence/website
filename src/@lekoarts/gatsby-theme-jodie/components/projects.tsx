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
            subtitle: string
            shortTitle: string
            price: string
            capacity: string
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
        <h1 className="categorie-bse">Liqueures</h1>
        <div
            sx={{
                display: `grid`,
                gridTemplateColumns: [`1fr`, `1fr 1fr`],
                gridAutoRows: `36vh`,
            }}
        >
            {projects.nodes.length > 0 ? (
                projects.nodes.map((project) => (
                    <GridItem to={project.slug} key={project.slug} data-testid={project.shortTitle}>
                        <div className="grid-image">
                            <Img className="vignette-bse" fluid={project.cover.childImageSharp.fluid} />
                        </div>
                        <div className="grid-text">
                            <h3 className="titre-bse">{project.shortTitle}</h3>
                            <p className="sous-titre-bse">{project.subtitle}</p>
                            <p className="contenance-bse">{project.capacity}</p>
                            <h3 className="prix-bse">{project.price}</h3>
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
