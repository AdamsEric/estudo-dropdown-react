import { ReactElement, ReactFragment } from 'react'
import styled from 'styled-components'

const DropdownItemStyled = styled('div')`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;

  &:hover {background-color: #f1f1f1;}
`

interface DropdownItemProps {
  children: ReactElement | ReactFragment,
  onClick: Function
}

const DropdownItem = (props: DropdownItemProps) => {
  return (
    <DropdownItemStyled onClick={() => props.onClick()}>
      {props.children}
    </DropdownItemStyled>
  )
}

export default DropdownItem