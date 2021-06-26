/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react";
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout";
import {visuallyHidden} from "@lekoarts/gatsby-theme-jodie/src/styles/utils";
import locales from "@lekoarts/gatsby-theme-jodie/src/locales/index";
import "../../../components/style.css"
import photo from "/static/home_desk.jpg"
import {Link} from "gatsby";

const Homepage = () => {
    let divisor = 9

    const itemProduits = {
        slug: '/produits',
        title: 'Produits',
    }

    return (
        <Layout>
            <h1 sx={visuallyHidden} data-testid="page-title">
                {locales.home}
            </h1>
            <div className="home-bse">
                <div className="home-article-link home-haut-bse">
                  <div className="boite-zoom">
                    <Link className="simple-bse" to={itemProduits.slug}>Nos produits</Link>
                    <img src={photo} />
                  </div>
                </div>
                <div className="home-bas-bse">
                    <div className="bas-gauche-bse">
                      <h1>Micro-distillerie</h1>
                    </div>
                    <div className="bas-droite-bse">
                      <div className="boite-zoom">
                        <h3>Nous travaillons nos saveurs de manière artisanale à partir de produits locaux de qualité.</h3>
                        <Link className="simple-bse" to="/">En savoir +</Link>
                      </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Homepage
