/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react";
import Layout from "@lekoarts/gatsby-theme-jodie/src/components/layout";
import {visuallyHidden} from "@lekoarts/gatsby-theme-jodie/src/styles/utils";
import locales from "@lekoarts/gatsby-theme-jodie/src/locales/index";
import "../../../components/style.css"
import photo from "/static/istockphoto-480045080-612x612.jpg"

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
                    <img src="https://cap.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2020.2F06.2F13.2F61a8e269-52ba-4ac4-9607-c6c9e11b73f5.2Ejpeg/790x395/background-color/ffffff/quality/90/framboises-melons-tomates-quels-sont-les-fruits-et-legumes-made-in-france-bien-plus-chers-1372584.jpg" />
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
