import React from "react"
import { Button, themeSpacing } from "@datapunt/asc-ui"
import { ButtonVariant } from "@datapunt/asc-ui/lib/components/Button/Button"
import styled from "styled-components"

type Props = Omit<React.ComponentProps<typeof Button>, "onClick"> & {
  onClick: () => void
  isCollapsed: boolean
  variant?: ButtonVariant
  textToOpen?: string
  textToClose?: string
}

const StyledButton = styled(Button)`
  margin-bottom: ${ themeSpacing(5) };
`

const ToggleCollapse: React.FC<Props> = (
  { onClick, 
    isCollapsed, 
    variant = "textButton", 
    textToOpen = "+ Toon alle", 
    textToClose = "- Toon minder"  
  }) => (
    <StyledButton onClick={ onClick } variant={variant} >{ isCollapsed ? textToOpen : textToClose }</StyledButton>
  ) 

export default ToggleCollapse