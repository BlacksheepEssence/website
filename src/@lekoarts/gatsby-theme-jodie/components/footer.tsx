/** @jsx jsx */
import { jsx, Link, useThemeUI } from "theme-ui"
import { readableColor } from "polished"
import useSiteMetadata from "@lekoarts/gatsby-theme-jodie/src/hooks/use-site-metadata"

const Footer = ({ bg }: { bg: string }) => {
    const { siteTitle } = useSiteMetadata()
    const { theme } = useThemeUI()

    const text = readableColor(
        bg,
        theme!.colors!.textMuted as string | undefined,
        theme!.colors!.textMutedLight as string | undefined
    )

    return (
        <footer
            sx={{
                position: [`relative`, `relative`, `relative`, `fixed`],
                width: (t: any): any => [`100%`, `100%`, `100%`, t.sidebar.normal, t.sidebar.wide],
                bottom: 0,
                color: text,
                fontSize: 0,
                p: [3, 3, 4],
                background: bg,
                a: {
                    color: readableColor(bg),
                    "&:hover,&:focus": {
                        color: readableColor(bg, `primary`, `primaryLight`, false),
                    },
                },
                variant: `footer`,
            }}
        >
            <div>
                &copy; {new Date().getFullYear()} by {siteTitle}.
            </div>
            <div>
                <Link
                    aria-label="Link to the theme's GitHub repository"
                    href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-jodie"
                >
                    Graphism
                </Link>
                {` `}
                by
                {` `}
                <Link aria-label="Link to the theme author's website" href="https://www.haniju.fr">
                    Haniju
                </Link>
            </div>
            <div>
                <Link
                    aria-label="Link to the theme's GitHub repository"
                    href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-jodie"
                >
                    Development
                </Link>
                {` `}
                by
                {` `}
                <Link aria-label="Link to the theme author's website" href="https://www.lifeinthecloud.fr/">
                    Life in the cloud
                </Link>
            </div>

            <div>
                Mentions légales
            </div>
        </footer>
    )
}

export default Footer
