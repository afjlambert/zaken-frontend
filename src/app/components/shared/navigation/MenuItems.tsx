
import styled from "styled-components"
import { MenuItem, MenuButton, Hidden } from "@amsterdam/asc-ui"

import routes from "app/routing/routes"
import ButtonLink from "app/components/shared/ButtonLink/ButtonLink"
import to from "app/routing/utils/to"

const items = [
  {
    path: "/zaken",
    hiddenLaptopM: false
  },
  {
    path: "/invorderingen",
    hiddenLaptopM: false
  },
  {
    path: "/hulp",
    hiddenLaptopM: true
  }
]

const StyledButtonLink = styled(ButtonLink)`
  span {
    width: 100%;
  }
`

const MenuItems: React.FC = () => (
  <>
  { items.map(({ path, hiddenLaptopM }) => {
      const { title } = routes[`${ path }/`]
      const menuItem = (
        <MenuItem key={ path }>
          <StyledButtonLink to={ to(path) }>
            <MenuButton as="span">
              { title }
            </MenuButton>
          </StyledButtonLink>
        </MenuItem>
      )
      return hiddenLaptopM ? <Hidden minBreakpoint="laptopM" key={ path }>{ menuItem }</Hidden> : menuItem
    })
  }
  </>
)

export default MenuItems
