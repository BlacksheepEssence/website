/** @jsx jsx */
import { jsx, Link as TLink } from "theme-ui"
import * as React from "react"
import { Link } from "gatsby"
import { readableColor } from "polished"
import useJodieConfig from "@lekoarts/gatsby-theme-jodie/src/hooks/use-jodie-config"
import "../../../components/style.css"
import {useState} from "react";

const Navigation = ({ bg }: { bg: string }) => {
    const { navigation } = useJodieConfig()
    const [menuStatus, setMenuStatus] = useState('close-menu');

    return (
        <nav
            aria-label="Primary Navigation"
            sx={{
                a: {
                    color: readableColor(bg),
                    textDecoration: `none`,
                    fontSize: [1, 2, 2, 3],
                    marginLeft: [2, 3, 3, 0],
                    "&:hover,&:focus": {
                        color: readableColor(bg, `primary`, `primaryLight`, false),
                    },
                },
                ul: {
                    margin: 0,
                    padding: 0,
                    li: {
                        listStyle: `none`,
                        display: [`inline-block`, `inline-block`, `inline-block`, `block`],
                    },
                },

                "@media all and (min-width: 1024px)": {
                    ".menuBurger": {
                        display: `none`,
                    },
                    ".close-cross-menu": {
                        display: `none`,
                    },
                },
                "@media all and (max-width: 1023px)": {
                    "ul": {
                       visibility: `hidden`,
                        opacity: 0,
                      "&.open-menu": {
                          display: `flex`,
                          position: `fixed`,
                          top: 0,
                          left: 0,
                          height: `100%`,
                          width: `100%`,
                          background: `#ffffff`,
                          zIndex: 9998,
                          visibility: `visible`,
                          flexDirection: `column`,
                          justifyContent: `center`,
                          alignItems: `center`,
                          opacity: 1,
                      },
                      li: {
                          background: `#EDEDED`,
                          margin: `10px 0`,
                          padding: `5px 20px 5px 5px`,
                          a: {
                              fontSize: `1.75em`
                          }
                      }
                    },
                    ".menuBurger": {
                        display: `flex`,
                        alignItems: `center`,
                        position: `absolute`,
                        top: `0px`,
                        right: `0px`,
                        padding: `0% 5%`,
                        zIndex: `1`,
                        cursor: `pointer`,
                        height: `100%`,
                        "&.open-menu": {
                            display: `none`,
                        }
                    },

                    ".close-cross-menu": {
                        display: `none`,
                        "&.open-menu": {
                            display: `block`,
                            "svg": {
                                height: `40px`,
                                width: `40px`,
                                float: `right`,
                                position: `fixed`,
                                top: `40px`,
                                right: `50px`,
                                zIndex: `9999`,
                                cursor: `pointer`,
                            }

                        }
                    },
                },
                variant: `navigation`,
            }}
        >
            <div className="menuBurger" onClick={() => setMenuStatus('open-menu')}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="34px" height="27px" viewBox="0 0 34 27" enableBackground="new 0 0 34 27" xmlSpace="preserve">
                    <rect fill="#000000" width="34" height="4"/>
                    <rect y="11" fill="#000000" width="34" height="4"/>
                    <rect y="23" fill="#000000" width="34" height="4"/>
                </svg>
            </div>
            <div className={"close-cross-menu" + " " + menuStatus} onClick={() => setMenuStatus('close-menu')}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <line x1="10" y1="10" x2="34" y2="34" stroke="#000000" strokeWidth="5" />
                    <line x1="34" y1="10" x2="10" y2="34" stroke="#000000" strokeWidth="5" />
                </svg>
            </div>
            <ul className={menuStatus}>
                {navigation.map((navItem) => (
                    <li key={navItem.slug}>
                        <TLink as={Link} to={navItem.slug}>
                            {navItem.name}
                        </TLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation
