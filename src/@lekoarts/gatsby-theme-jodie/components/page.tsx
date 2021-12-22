/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { PageProps } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "./layout"
import SEO from "@lekoarts/gatsby-theme-jodie/src/components/seo"
import "../../../components/style.css"
import ContactForm from "../../../pages/contact-form.js"

type DataProps = {
    page: {
        title: string
        slug: string
        excerpt: string
        body: string
        color: string
        custom: boolean
        cover: {
            childImageSharp: {
                resize: {
                    src: string
                }
            }
        }
    }
}

const Page: React.FC<PageProps<DataProps>> = ({ data: { page }, location }) => (
    <Layout color={page.color || undefined}>
        <SEO
            title={page.title}
            description={page.excerpt}
            pathname={location.pathname}
            image={page.cover.childImageSharp.resize.src}
        />
        <div
            sx={{
                variant: page.custom ? `content.custom` : `content.page`,
            }}
            data-testid="page-content"
        >
            <MDXRenderer>{page.body}</MDXRenderer>
            { page.title == 'Contact' ? <ContactForm></ContactForm> : '' }
        </div>
    </Layout>
)

export default Page
