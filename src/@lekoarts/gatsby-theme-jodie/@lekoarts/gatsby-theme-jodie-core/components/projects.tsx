import * as React from "react"
import { PageProps } from "gatsby"
import Projects from "../../../components/projects"
import { ChildImageSharp } from "@lekoarts/gatsby-theme-jodie/src/types"

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

export default function JodieCoreProjects({ children, ...props }: PageProps<DataProps>) {
  return <Projects {...props}>{children}</Projects>
}
