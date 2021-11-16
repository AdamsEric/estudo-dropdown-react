import { ReactElement, ReactFragment } from 'react'
import styled from 'styled-components'

const DropdownMenuStyled = styled('div')`
  display: none;
  position: absolute;
  right: 0;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`

interface DropdownMenuProps {
  children: ReactElement | ReactFragment
}

const DropdownMenu = (props: DropdownMenuProps) => {
  return (
    <DropdownMenuStyled className="dropdown-menu">
      {props.children}
    </DropdownMenuStyled>
  )
}

export default DropdownMenu