/** @jsx jsx */
import { jsx } from "theme-ui"
import * as React from "react"
import { Link } from "gatsby"

const GridItem: React.FC<{ to: string; className?: string }> = ({ children, to, ...props }) => (
    // @ts-ignore
    <div
        to={to}
        sx={{
            position: `relative`,
            "> div": {
                position: `absolute !important`,
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            },
            "> div:before": {
                position: `absolute`,
                content: `''`,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 5,
            },
            "> div:after": {
                position: `absolute`,
                content: `''`,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                transition: `all 0.3s ease-in-out`,
            },
            "> div img": {
                transition: `all 0.3s ease 0s !important`,
            },
            "> div > h1": {
                zIndex: 10,
                left: 0,
                right: 0,
                margin: 0,
            },
            "> div > h3": {
                zIndex: 10,
                color: `black`,
                position: `absolute`,
                left: `36vh`,
                right: 0,
                textAlign: `left`,
                fontSize: [3, 3, 4],
                padding: 3,
            },
            "> div > p": {
                zIndex: 10,
                color: `black`,
                position: `absolute`,
                left: `36vh`,
                right: 0,
                textAlign: `left`,
                padding: 3,
            },
            "&:hover": {
                "> div img": {
                    //transform: `scale(1.05)`,
                },
            },
            "&:focus": {
                outline: `none`,
                "> div:after": {
                    boxShadow: (t) => `inset 0 0 0 7px ${t.colors.white}`,
                    zIndex: 10,
                },
            },
            "@media screen and (prefers-reduced-motion: reduce)": {
                "&:hover": {
                    "> div img": {
                        //transform: `scale(1)`,
                    },
                    "> div:after": {
                        boxShadow: (t) => `inset 0 0 0 7px ${t.colors.white}`,
                        zIndex: 10,
                    },
                },
            },
            variant: `grid-item`,
        }}
        {...props}
    >
        {children}
    </div>
)

export default GridItem
