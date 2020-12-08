import React from "react"
import { Icon, Heading, themeSpacing } from "@amsterdam/asc-ui"
import * as Assets from "@material-ui/icons"
import styled from "styled-components"

type Props = {
  header: string
  headingSize?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  icon?: keyof typeof Assets
  iconSize?: number
}

const Div = styled.div`
  display: flex;
`
const StyledIcon = styled(Icon)`
  margin-right: ${ themeSpacing(5) };
`

const HeadingWithIcon: React.FC<Props> = ({ icon, header, headingSize = "h1", iconSize = 36 }) => {
  const Asset = icon ? Assets[icon] : null
  return (
    <Div>
      { Asset != null &&
        <StyledIcon size={ iconSize }><Asset /></StyledIcon>
      }
      <Heading forwardedAs={ headingSize }>{ header }</Heading>
    </Div>
  )
}
export default HeadingWithIcon
