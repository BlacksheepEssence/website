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
    products: {
        nodes: {
            category: string
            subtitle: string
            shortTitle: string
            price: string
            capacity: string
            slug: string
            cover: ChildImageSharp
        }[]
    }
}

const Categories = [
    'Eau de vie',
    'Liqueurs'
]

const Project: React.FC<PageProps<DataProps>> = ({ data: { products }, location }) => (
    <Layout>
        <SEO title="Projects" pathname={location.pathname} />
        <h1 sx={visuallyHidden} data-testid="page-title" className="titreBse">
            {locales.projects}
        </h1>

        <div className="produitsBse">
          <div className="boite-zoom">
            <p>
            Nos produits sont élaboré en Guadeloupe à partir de fruits récoltés localement. Notre carte évolue régulièrement et vous pouvez la découvrir en bas de page !
            </p>
            <button className="simpleBse"><h4>Passer commande</h4></button>
          </div>

        {Categories.map((category) => (
            <div>
                <h2 className="categorie-bse">{category}</h2>

                <div
                    sx={{
                        display: `grid`,
                        gridTemplateColumns: [`1fr`, `1fr 1fr`],
                        gridAutoRows: `36vh`,
                        "@media all and (max-width: 1023px)": {
                            gridAutoRows: `27vh`,
                        }

                    }}
                >

                    {products.nodes.length > 0 ? (
                        products.nodes.map((product) => (
                            product.category == category ?
                                <GridItem to={product.slug} key={product.slug} data-testid={product.shortTitle}>
                                    <div className="grid-image">
                                        <Img className="vignette-bse" fluid={product.cover.childImageSharp.fluid} />
                                    </div>
                                    <div className="grid-text">
                                        <div className="vignette-text">
                                            <h3 className="titre-bse">{product.shortTitle}</h3>
                                            <p className="sous-titre-bse">{product.subtitle}</p>
                                            <p className="contenance-bse">{product.capacity}</p>
                                            <h3 className="prix-bse">{product.price}</h3>
                                        </div>
                                    </div>
                                </GridItem>
                            : ("")
                        ))
                    ) : (
                        <div sx={{ padding: 3 }}>No products found at the location defined for "projectsPath"</div>
                    )}
                </div>
            </div>
        ))}

      </div>
    </Layout>
)

export default Project
