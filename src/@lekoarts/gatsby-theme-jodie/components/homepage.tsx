/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react";
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout";
import {visuallyHidden} from "@lekoarts/gatsby-theme-jodie/src/styles/utils";
import locales from "@lekoarts/gatsby-theme-jodie/src/locales/index";
import "../../../components/style.css"
import photo from "/static/home_desk.jpg"

const Homepage = () => {
    let divisor = 9

    const itemArticles = {
        slug: '/articles',
        title: 'Articles',
    }

    return (
        <Layout>
            <h1 sx={visuallyHidden} data-testid="page-title">
                {locales.home}
            </h1>
            <div class="home-bse">
                <div className="home-article-link" class="home-haut-bse">
                    <button class="simple-bse">Nos produits</button>
                    <img src={photo} />
                </div>
                <div class="home-bas-bse">
                    <div class="bas-gauche-bse">
                      <h1>Micro-distillerie</h1>
                    </div>
                    <div class="bas-droite-bse">
                      <h3>Nous travaillons nos saveurs de manière artisanale à partir de produits locaux de qualité.</h3>
                      <button class="simple-bse">En savoir +</button>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Homepage
